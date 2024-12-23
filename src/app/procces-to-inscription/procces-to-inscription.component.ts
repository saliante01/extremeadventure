import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-procces-to-inscription',
  imports: [CommonModule],
  templateUrl: './procces-to-inscription.component.html',
  styleUrls: ['./procces-to-inscription.component.css']
})
export class ProccesToInscriptionComponent {
  faqList = [
    {
      question: '¿Cuales son los pasos para comprar?',
      answers: [
        'Paso 1: Registrarse en la plataforma',
        'Paso 2: Una vez registrado, ir a "Fechas y Precios" , y seleccionar fecha',
        'Paso 3: Aceptar terminos y condiciones, despues de leer las actividades',
        'Paso 4: Llenar formulario con datos personales y enviar.',
        'Paso 5: Esperar a que la solicitud sea recibida por la empresa, ellos se comunicaran contigo para explicar el proceso de pago',
        'Adicional:Si se quiere comprar más de una semana en la Escuela de verano, se recomienda ver todas las fechas de interes, Seleccionar una fecha de estas, y agregar en el formulario todas las fechas de interes.',

      ],
      open: false
    },
    {
      question: '¿Es necesario registrarme para inscribirme en la escuela?',
      answers: [
        'Sí, debes crear una cuenta para poder inscribirte.',
        'Completa tus datos y sigue las instrucciones para finalizar el proceso.'
      ],
      open: false
    },
    {
      question: '¿Tengo que seguir todas las reglas?',
      answers: [
        'Sí, todas las reglas deben respetarse para garantizar un ambiente seguro.',
        'El incumplimiento puede resultar en la cancelación de tu inscripción.'
      ],
      open: false
    }
  ];

  toggleAnswer(item: any) {
    item.open = !item.open;
  }
}
