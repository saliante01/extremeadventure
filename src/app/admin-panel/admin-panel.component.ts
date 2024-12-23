import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent {
  user = {
    nombre: 'John',
    apellido: 'Doe',
    rut: '12345678-9',
    email: 'john.doe@example.com',
    password: 'password123',
  };

  saveChanges() {
    console.log('Información guardada:', this.user);
    alert('Los cambios han sido guardados con éxito.');
  }
}
