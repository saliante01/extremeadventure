import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-camp-detail',
  standalone:true,
  imports:[FormsModule,CommonModule],
  templateUrl: './camp-detail.component.html',
  styleUrls: ['./camp-detail.component.css'],
})
export class CampDetailComponent implements OnInit {
  // Variables para almacenar los días de la semana y las actividades
  daysOfWeek: string[] = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
  ];

  activities: Record<string, { title: string, time: string, location: string, requirements: string | null, activityId: number }[]> = {};

  colors: string[] = [
    '#0c347e', // Azul
    '#90ee90', // Verde claro
    '#dda0dd', // Morado claro
    '#add8e6', // Celeste claro
    '#006400', // Verde oscuro
    '#ffffe0', // Amarillo claro
    '#ffa07a', // Naranja claro
  ];

  currentIndex: number = 0;  // Índice para el desplazamiento del carrusel

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const campId = +this.route.snapshot.paramMap.get('id')!;  // Obtener el ID desde la URL
    this.fetchActivities(campId);  // Realizar la consulta con el ID obtenido
  }

  // Método para obtener las actividades desde la API
  fetchActivities(campId: number): void {
    this.http
      .get<any[]>(`http://localhost:8000/api/week/${campId}/scheduled_activities/`)
      .subscribe((data) => {
        this.organizeActivitiesByDay(data);  // Organizar las actividades por día
      });
  }

  // Organizar las actividades por días de la semana
  organizeActivitiesByDay(activities: any[]): void {
    const activitiesByDay: Record<string, { title: string, time: string, location: string, requirements: string | null, activityId: number }[]> = {
      'Lunes': [],
      'Martes': [],
      'Miércoles': [],
      'Jueves': [],
      'Viernes': [],
      'Sábado': [],
      'Domingo': [],
    };

    activities.forEach((activity) => {
      const date = new Date(activity.date);
      const dayOfWeek = this.daysOfWeek[date.getDay()];  // Obtener el día de la semana
      activitiesByDay[dayOfWeek].push({
        title: activity.activity_title,  // Título de la actividad
        time: `${activity.start_time} - ${activity.end_time}`,  // Horario de la actividad
        location: activity.location,  // Ubicación de la actividad
        requirements: activity.requirements,  // Requisitos de la actividad (si existen)
        activityId: activity.id,  // ID de la actividad
      });
    });

    this.activities = activitiesByDay;  // Asignar las actividades organizadas
  }

  // Obtener la transformación CSS para el carrusel
  get carouselTransform(): string {
    const isMobile = window.innerWidth <= 768;  // Detectar si es dispositivo móvil
    const distancePerClick = isMobile ? 350 : 400;  // Definir distancia del carrusel
    return `translateX(-${this.currentIndex * distancePerClick}px)`;  // Aplicar transformación
  }

  // Mover el carrusel a la siguiente tarjeta
  next(): void {
    if (this.currentIndex < this.daysOfWeek.length - 1) {
      this.currentIndex++;
    }
  }

  // Mover el carrusel a la tarjeta anterior
  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  // Obtener el color del círculo basado en el índice del día
  getCircleColor(index: number): string {
    return this.colors[index % this.colors.length];
  }
}
