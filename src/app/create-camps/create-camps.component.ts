import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateCampService } from '../create-camp.service';
import { AuthService } from '../auth-service.service'; // Importamos el AuthService

@Component({
  selector: 'app-create-camps',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-camps.component.html',
  styleUrls: ['./create-camps.component.css'],
})
export class CreateCampsComponent {
  semester: string = 'SUMMER';  // Por defecto es verano

  constructor(
    private createCampService: CreateCampService,
    private authService: AuthService // Inyectamos el AuthService
  ) {}

  onSubmit(): void {
    // Verificamos si el token es válido antes de enviar la solicitud
    if (!this.authService.isTokenValid()) {
      console.error('User is not authenticated or the token is expired.');
      return;
    }

    // Preparamos los datos del formulario
    const formData = {
      semester: this.semester,  // Enviamos el tipo de campamento (SUMMER, WINTER, SPRING)
    };

    // Enviamos la solicitud POST
    this.createCampService.submitForm('http://localhost:8000/api/camp/create', formData).subscribe(
      (response) => {
        console.log('Camp created:', response);
      },
      (error) => {
        console.error('Error creating camp:', error);
      }
    );
  }
}
