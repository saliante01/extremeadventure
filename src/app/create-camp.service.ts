import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateCampService {
  constructor(private http: HttpClient) {}

  submitForm(url: string, formData: any): Observable<any> {
    return this.http.post<any>(url, formData, { withCredentials: true }); // Enviar el POST a la URL
  }
}
