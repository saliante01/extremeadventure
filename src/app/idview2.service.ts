import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdView2Service {
  private apiUrl = 'http://localhost:8000/api/camp/1/weeks';  // URL de la API

  constructor(private http: HttpClient) { }

  getCampWeeks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);  // Realizamos la solicitud HTTP GET
  }
}
