import { Component, OnInit } from '@angular/core';
import { ApplicationformserviceService } from '../aplicationformservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css'],
})
export class ApplicationFormComponent implements OnInit {
  // Inicialización explícita para evitar null
  formData = {
    nombre: '',             // Asegura que no sea null, se inicializa como cadena vacía
    rut: '',                // Se inicializa como cadena vacía
    email: '',              // Se inicializa como cadena vacía
    telefono: '',           // Se inicializa como cadena vacía
    patologica: false,      // Se asegura de que sea un booleano (no null)
    weeks: [] as number[],  // Inicializa el arreglo de semanas como un arreglo vacío (no null)
  };

  weekOptions: number[] = [1, 2, 3, 4, 5, 6]; // Opciones de semanas (Ejemplo de semanas)

  constructor(private applicationformserviceService: ApplicationformserviceService ,  private router: Router) {}

  ngOnInit(): void {
    // Aquí podrías obtener los datos del backend si es necesario, pero no es necesario por ahora.
  }

  // Función que se ejecuta al enviar el formulario
  onSubmit(form: any): void {
    if (this.formData.nombre && this.formData.rut && this.formData.email && this.formData.telefono && this.formData.weeks.length > 0) {
      // Recoger las semanas seleccionadas
      alert('Espera mientras se envía la solicitud...');
      const applicationData = {
        name: this.formData.nombre,
        email: this.formData.email,
        rut: this.formData.rut,
        phone_number: this.formData.telefono,
        medical_condition: this.formData.patologica,
        weeks: this.formData.weeks, // Enviar las semanas seleccionadas
      };
  
      // Enviar el formulario
      this.applicationformserviceService.submitApplication(applicationData).subscribe(
        (response) => {
          console.log('Formulario enviado:', response);
          alert('Formulario enviado exitosamente.');  // Este es el alert que aparece cuando el envío es exitoso.
          form.reset();
  
          // Redirigir al usuario a la página 'home' después de un envío exitoso
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Error al enviar el formulario:', error);
          alert('Hubo un error al enviar el formulario. Por favor, intente nuevamente.');
        }
      );
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }
  

  // Función para manejar el cambio en las semanas seleccionadas
  onWeekChange(week: number, event: Event): void {
    const target = event.target as HTMLInputElement; // Aseguramos que `target` es un HTMLInputElement
    if (target.checked) {
      // Agregar la semana seleccionada
      this.formData.weeks.push(week);
    } else {
      // Eliminar la semana desmarcada
      const index = this.formData.weeks.indexOf(week);
      if (index > -1) {
        this.formData.weeks.splice(index, 1);
      }
    }
  }
}
