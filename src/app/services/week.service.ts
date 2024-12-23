import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeekService {
  constructor(private http: HttpClient) {}

  // Método para enviar el formulario
  submitForm(url: string, formData: any): Observable<any> {
    return this.http.post<any>(url, formData, { withCredentials: true });
  }
}
