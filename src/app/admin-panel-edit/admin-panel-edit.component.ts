import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-panel-edit',
  standalone: true,
  imports: [FormsModule, CurrencyPipe, CommonModule],
  templateUrl: './admin-panel-edit.component.html',
  styleUrls: ['./admin-panel-edit.component.css'],
})
export class AdminPanelEditComponent {
  course = {
    name: 'Curso de Ejemplo',
    startDate: '2025-01-06',
    endDate: '2025-01-11',
    price: 180000,
    capacity: 20,
  };

  activities = [
    {
      activity: 1,
      date: '2025-01-07',
      start_time: '09:30:00',
      end_time: '12:30:00',
      location: 'Playa',
    },
    {
      activity: 2,
      date: '2025-01-07',
      start_time: '14:30:00',
      end_time: '16:30:00',
      location: 'Playa',
    },
    {
      activity: 2,
      date: '2025-01-06',
      start_time: '14:30:00',
      end_time: '16:30:00',
      location: 'Centro',
    },
  ];

  activityNames: { [key: number]: string } = {
    1: 'Kayak',
    2: 'Ciclismo',
    3: 'Senderismo',
    4: 'Trekking',
    5: 'Natación',
    6: 'Cabalgata',
  };

  onSubmit() {
    console.log('Curso actualizado:', this.course);
    alert('Los cambios del curso han sido guardados.');
  }

  getDayOfWeek(date: string): string {
    const dayOffsets: { [key: string]: string } = {
      '2025-01-06': 'Lunes',
      '2025-01-07': 'Martes',
      '2025-01-08': 'Miércoles',
      '2025-01-09': 'Jueves',
      '2025-01-10': 'Viernes',
      '2025-01-11': 'Sábado',
    };

    // El tipo de date ahora es una clave válida de dayOffsets
    return dayOffsets[date as keyof typeof dayOffsets] || 'Domingo';
  }
}
