import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CampWeeksService } from '../camp-weeks.service'; // Importa el nuevo servicio

@Component({
  selector: 'app-summer-camps-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summer-camps-admin.component.html',
  styleUrls: ['./summer-camps-admin.component.css'],
})
export class SummerCampsAdminComponent implements OnInit {
  camps: any[] = []; // Lista dinámica de campamentos

  constructor(private router: Router, private campWeeksService: CampWeeksService) {}

  ngOnInit(): void {
    this.campWeeksService.getCampWeeks().subscribe((data) => {
      this.camps = data;
    });
  }

  administrarCamp(camp: any): void {
    console.log('Administrar campamento:', camp);
    alert(`Administrando campamento con inicio el ${camp.start_date}`);
    this.router.navigate(['/header-edit-camp', camp.id]); // Redirige con el ID del campamento
  }
}
