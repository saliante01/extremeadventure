import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule

@Component({
  selector: 'app-root',
  standalone: true,  // Asegúrate de que sea standalone
  imports: [RouterOutlet, HttpClientModule],  // Añade HttpClientModule a imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wsc-ui';
}
