import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Vacante } from '../models/vacante.model';

@Injectable({
  providedIn: 'root',
})
export class Vacantes {
  private base = `${environment.apiUrl}/vacantes`;
  constructor(private http: HttpClient) {}
  list() { return this.http.get<Vacante[]>(this.base); }
  create(data: Partial<Vacante>) { return this.http.post<Vacante>(this.base, data); }
  update(id: string, data: Partial<Vacante>) { return this.http.put<Vacante>(`${this.base}/${id}`, data); }
  remove(id: string) { return this.http.delete<void>(`${this.base}/${id}`); }
  
}
