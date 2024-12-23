import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CampWeeksService {
  private apiUrl = 'http://localhost:8000/api/camp/1/weeks'; // URL de la API

  constructor(private http: HttpClient) {}

  // Método para obtener los datos de los campamentos
  getCampWeeks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      // Transforma los datos para reemplazar "camp: 1" por "Verano" y formatear fechas
      map((weeks) =>
        weeks.map((week) => ({
          ...week,
          camp: week.camp === 1 ? 'Verano' : week.camp,
          start_date: this.formatDate(week.start_date), // Formatea la fecha de inicio
          end_date: this.formatDate(week.end_date), // Formatea la fecha de término
        }))
      )
    );
  }

  // Método para formatear las fechas
  private formatDate(date: string): string {
    const [year, month, day] = date.split('-');
    return `${day}-${month}-${year}`;
  }
}
