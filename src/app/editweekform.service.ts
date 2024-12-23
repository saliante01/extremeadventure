import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditWeekFormService {
  constructor(private http: HttpClient) {}

  submitForm(url: string, formData: any): Observable<any> {
    return this.http.put<any>(url, formData, { withCredentials: true }); // Se añade { withCredentials: true }
  }
}
