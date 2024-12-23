import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-my-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css'],
})
export class MyCoursesComponent {
  // Ejemplo de cursos para la persona
  courses = [
    { fechaInicio: '2024-01-15', fechaTermino: '2024-03-15' },
    { fechaInicio: '2024-04-01', fechaTermino: '2024-06-01' },
    { fechaInicio: '2024-07-10', fechaTermino: '2024-09-10' },
    { fechaInicio: '2024-10-01', fechaTermino: '2024-12-01' },
  ];
}
