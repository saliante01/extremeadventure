import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScheduleFormService } from '../scheduleformservice.service';
import { AuthService } from '../auth-service.service'; // Importamos el AuthService

@Component({
  selector: 'app-forms-schedule',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forms-schedule.component.html',
  styleUrls: ['./forms-schedule.component.css'],
})
export class FormsScheduleComponent {
  weekId: number = 0;  // ID de la semana
  activity: number = 0;  // Número de actividad
  date: string = '';  // Fecha en formato 'YYYY-MM-DD'
  start_time: string = '';  // Hora de inicio (HH:MM:SS)
  end_time: string = '';  // Hora de fin (HH:MM:SS)
  location: string = '';  // Ubicación de la actividad
  requirements: string | null = null;  // Requisitos opcionales, puede ser null

  constructor(
    private scheduleFormService: ScheduleFormService,
    private authService: AuthService // Inyectamos el AuthService
  ) {}

  onSubmit(): void {
    // Verificamos que todos los campos estén llenos
    if (!this.weekId || !this.activity || !this.date || !this.start_time || !this.end_time || !this.location) {
      console.error('All fields are required.');
      return;
    }

    // Verificamos si el token es válido antes de enviar la solicitud
    if (!this.authService.isTokenValid()) {
      console.error('User is not authenticated or the token is expired.');
      return;
    }

    // Preparamos los datos del formulario
    const formData = {
      activity: this.activity,
      date: this.date,
      start_time: this.start_time,
      end_time: this.end_time,
      location: this.location,
      requirements: this.requirements,
    };

    // Construimos la URL con el ID de la semana
    const url = `http://localhost:8000/api/week/${this.weekId}/schedule`;

    // Enviamos la solicitud POST
    this.scheduleFormService.submitForm(url, formData).subscribe(
      (response) => {
        console.log('Schedule created:', response);
      },
      (error) => {
        console.error('Error creating schedule:', error);
      }
    );
  }
}
