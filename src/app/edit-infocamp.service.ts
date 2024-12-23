import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditInfoCampService {
  private apiUrl = 'http://localhost:8000/api/camp';  // URL base para el servicio

  constructor(private http: HttpClient) { }

  // Método para actualizar la información del campamento
  updateCampInfo(campId: number, weekId: number, campData: any): Observable<any> {
    const url = `${this.apiUrl}/${campId}/week/${weekId}`; // Formato de URL para el PUT
    return this.http.put<any>(url, campData);  // Realiza la solicitud PUT y retorna un Observable
  }
}
