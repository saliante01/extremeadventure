import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tutor-rules',
  imports: [CommonModule],
  templateUrl: './tutor-rules.component.html',
  styleUrl: './tutor-rules.component.css'
})
export class TutorRulesComponent {
  faqList = [
    {
      question: 'Cumplir con el horario de recogida y entrega',
      answer: 'Los padres deben ser puntuales al dejar y recoge a sus hijos en los horarios establecidos.',
      open: false
    },
    {
      question: 'Proveer información relevante',
      answer: 'Es importante que los padres proporcionen información actualizada sobre cualquier condición médica,alergias o necesidades especiales de su hijo.',
      open: false
    },
    {
      question: 'Comunicarse en caso de ausencia',
      answer: 'Si el niño no asistirá a alguna actividad o jornada, los padres deben informar a los responsables de la escuela de verano con antelación.',
      open: false
    },
    {
      question: 'Notificar cualquier incidente o accidente',
      answer: 'Si el niño sufre algún accidenete o incidente durante el día, los padres deben ser notificados de inmediato.',
      open: false
    },

  ];

  toggleAnswer(item: any) {
    item.open = !item.open;
  }
}
