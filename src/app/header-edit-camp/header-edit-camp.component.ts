import { Component } from '@angular/core';
import { AdminPanelEditComponent } from '../admin-panel-edit/admin-panel-edit.component';
import { NavbarAdminComponent } from "../navbar-admin/navbar-admin.component";
import { FooterComponent } from "../footer/footer.component";
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditInfoCampComponent } from "../edit-infocamp/edit-infocamp.component";
@Component({
  selector: 'app-header-edit-camp',
  imports: [AdminPanelEditComponent, NavbarAdminComponent, FooterComponent, EditInfoCampComponent],
  templateUrl: './header-edit-camp.component.html',
  styleUrl: './header-edit-camp.component.css'
})
export class HeaderEditCampComponent implements OnInit {
  campId: number | undefined; // Variable para almacenar el ID del campamento

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtén el parámetro 'id' de la ruta
    this.campId = Number(this.route.snapshot.paramMap.get('id')); // El parámetro 'id' se obtiene de la URL
    console.log('Camp ID recibido:', this.campId); // Verifica el ID recibido
  }
}
