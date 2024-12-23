import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent],
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  showModal: boolean = false; // Controla la visibilidad del modal

  constructor(private router: Router, private http: HttpClient) {}

  isFormValid(): boolean {
    return (
      this.firstName.length > 0 &&
      this.lastName.length > 0 &&
      this.isEmailValid(this.email) &&
      this.password.length > 0
    );
  }

  isEmailValid(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  onRegister(): void {
    const userData = {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      password: this.password,
    };

    // Enviar solicitud POST
    this.http
      .post('http://localhost:8000/api/users/register', userData)
      .pipe(
        catchError((error) => {
          console.error('Error al registrar:', error);
          return of(null); // Continuar sin interrumpir flujo en caso de error
        })
      )
      .subscribe((response: any) => {
        if (response) {
          console.log('Usuario registrado:', response);
          // Mostrar el modal de éxito
          this.showModal = true;
        }
      });
  }

  closeModal(): void {
    this.showModal = false;
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }
}
