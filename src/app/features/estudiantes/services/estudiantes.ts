import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { CrearEstudianteRequest, Estudiante } from '../models/estudiante.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Estudiantes {
  private base = `${environment.apiBase}/estudiantes`;

  constructor(private http: HttpClient) {}

  crear(payload: CrearEstudianteRequest): Observable<Estudiante> {
    return this.http.post<Estudiante>(this.base, payload);
  }

  listar(page = 0, size = 20): Observable<Estudiante[]> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<Estudiante[]>(this.base, { params });
  }

  obtener(idEstudiante: number): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.base}/${idEstudiante}`);
  }
}
