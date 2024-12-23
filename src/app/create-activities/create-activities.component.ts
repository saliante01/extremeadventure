import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivityService } from '../activity.service';
import { AuthService } from '../auth-service.service'; // Importamos el AuthService

@Component({
  selector: 'app-create-activities',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-activities.component.html',
  styleUrls: ['./create-activities.component.css'],
})
export class CreateActivitiesComponent {
  title: string = '';        // Título de la actividad
  description: string = '';  // Descripción de la actividad

  constructor(
    private activityService: ActivityService,
    private authService: AuthService // Inyectamos el AuthService
  ) {}

  onSubmit(): void {
    // Verificamos si el token es válido antes de enviar la solicitud
    if (!this.authService.isTokenValid()) {
      console.error('User is not authenticated or the token is expired.');
      window.alert('Se necesita el token');  // Mostrar alerta si el token no es válido
      return;
    }

    // Preparamos los datos del formulario
    const formData = {
      title: this.title,
      description: this.description,
    };

    // Enviamos la solicitud POST
    this.activityService.submitForm('http://localhost:8000/api/activity/create', formData).subscribe(
      (response) => {
        console.log('Activity created:', response);
      },
      (error) => {
        console.error('Error creating activity:', error);
      }
    );
  }
}
