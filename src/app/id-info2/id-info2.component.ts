import { Component, OnInit } from '@angular/core';
import { IdView2Service } from '../idview2.service';  // Importa el servicio
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-id-info2',
  imports:[CommonModule],
  templateUrl: './id-info2.component.html',
  styleUrls: ['./id-info2.component.css']
})
export class IdInfo2Component implements OnInit {
  campWeeks: any[] = [];  // Variable para almacenar las semanas del campamento

  constructor(private idView2Service: IdView2Service) { }

  ngOnInit(): void {
    this.idView2Service.getCampWeeks().subscribe(data => {
      this.campWeeks = data;  // Asigna la respuesta a la variable campWeeks
    });
  }
}
