import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Empresa } from '../models/empresa.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Empresas {
  private base = `${environment.apiUrl}/empresas`;
  constructor(private http: HttpClient) {}

  list(): Observable<Empresa[]> { return this.http.get<Empresa[]>(this.base); }
  get(id: string): Observable<Empresa> { return this.http.get<Empresa>(`${this.base}/${id}`); }
  create(data: Partial<Empresa>): Observable<Empresa> { return this.http.post<Empresa>(this.base, data); }
  update(id: string, data: Partial<Empresa>): Observable<Empresa> { return this.http.put<Empresa>(`${this.base}/${id}`, data); }
  remove(id: string): Observable<void> { return this.http.delete<void>(`${this.base}/${id}`); }
  
}
