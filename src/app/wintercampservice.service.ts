import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WintercampService {
  private baseUrl = 'http://localhost:8000/api/camp/2/weeks';  // URL para las semanas del campamento de invierno

  constructor(private http: HttpClient) {}

  // Método para obtener las semanas del campamento de invierno
  getWinterCampWeeks(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}
