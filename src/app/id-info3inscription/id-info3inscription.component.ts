import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Idview3Service } from '../idview3.service';

@Component({
  selector: 'app-id-info3inscription',
  imports: [CommonModule],
  templateUrl: './id-info3inscription.component.html',
  styleUrl: './id-info3inscription.component.css'
})
export class IdInfo3inscriptionComponent implements OnInit {
  campWeeks: any[] = [];  // Variable para almacenar las semanas del campamento

  constructor(private idView3Service: Idview3Service) { }

  ngOnInit(): void {
    this.idView3Service.getCampWeeks().subscribe(data => {
      this.campWeeks = data;  // Asigna la respuesta a la variable campWeeks
    });
  }
}

