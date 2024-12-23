import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampDetailService {
  private baseUrl = 'http://localhost:8000/api/week'; // Base URL

  constructor(private http: HttpClient) {}

  // Obtener actividades programadas para una semana
  getScheduledActivities(weekId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${weekId}/scheduled_activities/`);
  }


}
