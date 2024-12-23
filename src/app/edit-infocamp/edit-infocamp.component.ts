import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditInfoCampService } from '../edit-infocamp.service'; // Asegúrate de que la ruta sea correcta
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-edit-infocamp',
  imports:[ReactiveFormsModule],
  templateUrl: './edit-infocamp.component.html',
  styleUrls: ['./edit-infocamp.component.css']
})
export class EditInfoCampComponent implements OnInit {
  campForm: FormGroup;
  campId?: number;
  weekId?: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private editInfoCampService: EditInfoCampService,
    private router: Router
  ) {
    this.campForm = this.fb.group({
      id: ['', Validators.required],
      camp: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      capacity: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    // Obtener los parámetros de la URL (campId y weekId)
    this.route.params.subscribe(params => {
      this.campId = +params['campId'];  // Obtiene el campId de la URL
      this.weekId = +params['weekId'];  // Obtiene el weekId de la URL
    });
  }

  onSubmit(): void {
    if (this.campForm.valid && this.campId && this.weekId) {
      const campData = this.campForm.value;
      this.editInfoCampService.updateCampInfo(this.campId, this.weekId, campData).subscribe(
        (response) => {
          console.log('Información del campamento actualizada correctamente:', response);
          this.router.navigate(['/camp-list']); // Redirige a la lista de campamentos o donde desees
        },
        (error) => {
          console.error('Error al actualizar la información del campamento:', error);
        }
      );
    } else {
      console.log('Formulario inválido o parámetros no válidos');
    }
  }
}
