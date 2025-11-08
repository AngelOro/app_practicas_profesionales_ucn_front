import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Estudiante } from '../models/estudiante.model';

@Injectable({
  providedIn: 'root',
})
export class Estudiantes {
  private base = `${environment.apiUrl}/estudiantes`;
  constructor(private http: HttpClient) {}
  list() { return this.http.get<Estudiante[]>(this.base); }
  create(data: Partial<Estudiante>) { return this.http.post<Estudiante>(this.base, data); }
  update(id: string, data: Partial<Estudiante>) { return this.http.put<Estudiante>(`${this.base}/${id}`, data); }
  remove(id: string) { return this.http.delete<void>(`${this.base}/${id}`); }
}
