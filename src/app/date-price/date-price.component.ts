import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { WintercampDatepriceComponent } from "../wintercamp-dateprice/wintercamp-dateprice.component";
import { SummercampDatepriceComponent } from "../summercamp-dateprice/summercamp-dateprice.component";
import { HeaderDatePriceComponent } from "../header-date-price/header-date-price.component";


@Component({
  selector: 'app-date-price',
  imports: [FooterComponent,WintercampDatepriceComponent, SummercampDatepriceComponent, HeaderDatePriceComponent],
  templateUrl: './date-price.component.html',
  styleUrl: './date-price.component.css'
})
export class DatePriceComponent {

}
