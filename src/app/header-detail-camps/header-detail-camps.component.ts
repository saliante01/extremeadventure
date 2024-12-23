import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { CampDetailComponent } from '../camp-detail/camp-detail.component';
import { EspecificRulesComponent } from '../especific-rules/especific-rules.component';
import { StartProcessComponent } from '../start-process/start-process.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-header-detail-camps',
  imports:[NavbarComponent,CampDetailComponent,EspecificRulesComponent,StartProcessComponent,FooterComponent],
  templateUrl: './header-detail-camps.component.html',
  styleUrls: ['./header-detail-camps.component.css']
})
export class HeaderDetailCampsComponent implements OnInit {
  campId: number = 0;  // Aquí almacenamos el id del campamento

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtenemos el ID de la ruta
    this.campId = +this.route.snapshot.paramMap.get('id')!;
  }
}
