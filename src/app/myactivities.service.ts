import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyactivitiesService {

  private apiUrl = 'http://localhost:8000/api/activities/'; // URL de la API

  constructor(private http: HttpClient) { }

  // Método para obtener las actividades desde la API
  getActivities(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
