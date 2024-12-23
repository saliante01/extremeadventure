import { Component, OnInit } from '@angular/core';
import { IdViewService } from '../idview.service';  // Importa el servicio
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-id-info',
  imports:[CommonModule],
  templateUrl: './id-info.component.html',
  styleUrls: ['./id-info.component.css']
})
export class IdInfoComponent implements OnInit {
  campWeeks: any[] = [];  // Variable para almacenar las semanas del campamento

  constructor(private idViewService: IdViewService) { }

  ngOnInit(): void {
    this.idViewService.getCampWeeks().subscribe(data => {
      this.campWeeks = data;  // Asigna la respuesta a la variable campWeeks
    });
  }
}
