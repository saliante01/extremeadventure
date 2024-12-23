import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartProcessComponent } from "../start-process/start-process.component";
@Component({
  selector: 'app-especific-rules',
  imports: [CommonModule],
  templateUrl: './especific-rules.component.html',
  styleUrl: './especific-rules.component.css'
})
export class EspecificRulesComponent {
  faqList = [
    {
      question: 'Actividades Acuáticas(Kayak,SUP,Natación)',
      answer: 'Yes, it is possible to have a double room, but this is subject to availability and cannot be guaranteed. There is a 100.-CHF extra charge per child per day to stay in a double room.',
      open: false
    },
    {
      question: 'Actividades Deportivas(Baloncesto)',
      answer: 'The best time to contact your children is during their free time, which varies depending on the camp schedule.',
      open: false
    },
    // Añade más preguntas y respuestas aquí
  ];

  toggleAnswer(item: any) {
    item.open = !item.open;
  }

}

