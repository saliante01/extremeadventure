import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { InformationComponent } from '../information/information.component';
import { WhatweofferComponent } from '../whatweoffer/whatweoffer.component';
import { PrioritiesComponent } from '../priorities/priorities.component';
import { InstagramFeedComponent } from '../instagram-feed/instagram-feed.component';
import { AboutMoreCampsComponent } from "../about-more-camps/about-more-camps.component";
@Component({
  selector: 'app-home',
  imports: [FooterComponent, HeaderComponent, InformationComponent, WhatweofferComponent, PrioritiesComponent, InstagramFeedComponent, AboutMoreCampsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
