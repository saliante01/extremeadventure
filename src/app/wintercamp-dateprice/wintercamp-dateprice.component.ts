import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WintercampService } from '../wintercampservice.service';
import { CommonModule } from '@angular/common';
interface Camp {
  id: number;
  startDate: Date;
  endDate: Date;
  status: string;
  price: number | null;
}

@Component({
  selector: 'app-wintercamp-dateprice',
  imports:[CommonModule],
  templateUrl: './wintercamp-dateprice.component.html',
  styleUrls: ['./wintercamp-dateprice.component.css'],
})
export class WintercampDatepriceComponent implements OnInit {
  camps: Camp[] = [];  // Arreglo para almacenar los campamentos

  constructor(private router: Router, private wintercampService: WintercampService) {}

  ngOnInit(): void {
    this.wintercampService.getWinterCampWeeks().subscribe((data) => {
      this.camps = data.map((week) => {
        const startDate = new Date(week.start_date);
        const endDate = new Date(week.end_date);

        // Establecer las fechas en UTC para evitar la diferencia de huso horario
        startDate.setUTCHours(12, 0, 0, 0);  // Establecer la hora en UTC
        endDate.setUTCHours(12, 0, 0, 0);  // Establecer la hora en UTC

        return {
          id: week.id,
          startDate: startDate,
          endDate: endDate,
          status: week.capacity > 0 ? 'DISPONIBLE' : 'LLENO',
          price: week.price,
        };
      });
    });
  }

  enrollNow(campId: number): void {
    console.log('Camp ID:', campId);
    this.router.navigate(['/header-detail-camps', campId]);  // Redirige al detalle del campamento
  }
}
