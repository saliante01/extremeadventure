import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-panel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css'],
})
export class UserPanelComponent {
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
