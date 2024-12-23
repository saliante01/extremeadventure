import { Component, OnInit } from '@angular/core';
import { MyactivitiesService } from '../myactivities.service';
import { CommonModule } from '@angular/common'; // Importamos el servicio

@Component({
  selector: 'app-my-activities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-activities.component.html',
  styleUrls: ['./my-activities.component.css']
})
export class MyActivitiesComponent implements OnInit {

  activities: any[] = []; // Usamos any[] para evitar la necesidad de un modelo

  constructor(private activitiesService: MyactivitiesService) { }

  ngOnInit(): void {
    // Llamamos al servicio para obtener las actividades al inicializar el componente
    this.activitiesService.getActivities().subscribe((data: any[]) => {
      this.activities = data; // Asignamos directamente el arreglo de actividades
    });
  }
}
