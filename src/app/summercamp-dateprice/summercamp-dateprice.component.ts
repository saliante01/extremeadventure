import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CampService } from '../camp.service';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es'; // Importa el locale en español

// Registra el locale en español
registerLocaleData(localeEs);

interface Camp {
  id: number; // Nuevo campo para almacenar el ID del campamento
  startDate: Date;
  endDate: Date;
  status: string;
  price: number | null;
}


@Component({
  selector: 'app-summercamp-dateprice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summercamp-dateprice.component.html',
  styleUrls: ['./summercamp-dateprice.component.css'],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }] // Configura el idioma en español
})
export class SummercampDatepriceComponent implements OnInit {
  camps: Camp[] = [];  // Especificamos que camps es un arreglo de objetos de tipo Camp

  constructor(private router: Router, private campService: CampService) {}

  ngOnInit(): void {
    this.campService.getCampWeeks().subscribe((data) => {
      this.camps = data.map((week) => {
        const startDate = new Date(week.start_date);
        const endDate = new Date(week.end_date);
  
        // Establecer las fechas en UTC para evitar la diferencia de huso horario
        startDate.setUTCHours(12, 0, 0, 0); // Establecer la hora al mediodía en UTC
        endDate.setUTCHours(12, 0, 0, 0); // Establecer la hora al mediodía en UTC
  
        return {
          id: week.id, // Almacenar el ID del campamento
          startDate: startDate,
          endDate: endDate,
          status: week.capacity > 0 ? 'DISPONIBLE' : 'LLENO',
          price: week.price,
        };
      });
    });
  }
  enrollNow(campId: number): void {
    console.log('Camp ID:', campId); // Puedes usar el ID como desees
    this.router.navigate(['/header-detail-camps', campId]); // Ejemplo de redirección con el ID
  }
  
}
