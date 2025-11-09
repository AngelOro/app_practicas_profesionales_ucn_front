import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CrearVacanteRequest, EditarVacanteRequest, Vacante } from '../models/vacante.model';

@Injectable({
  providedIn: 'root',
})
export class Vacantes {
  private base = `${environment.apiUrl}/api/vacantes`;

  constructor(private http: HttpClient) {}

  crear(payload: CrearVacanteRequest): Observable<Vacante> {
    return this.http.post<Vacante>(`${this.base}/crear`, payload);
  }

  listarTodos(params?: { programa?: string; ciudad?: string; modalidad?: string; page?: number; size?: number; })
    : Observable<Vacante[]> {
    let p = new HttpParams();
    if (params?.programa)  p = p.set('programa', params.programa);
    if (params?.ciudad)    p = p.set('ciudad', params.ciudad);
    if (params?.modalidad) p = p.set('modalidad', params.modalidad);
    p = p.set('page', String(params?.page ?? 0)).set('size', String(params?.size ?? 20));
    return this.http.get<Vacante[]>(`${this.base}/listarTodos`, { params: p });
  }

  obtener(idVacante: number): Observable<Vacante> {
    return this.http.get<Vacante>(`${this.base}/consultarPorId/${idVacante}`);
  }

  editar(idVacante: number, payload: EditarVacanteRequest): Observable<Vacante> {
    return this.http.patch<Vacante>(`${this.base}/${idVacante}`, payload);
  }

  cerrar(idVacante: number): Observable<void> {
    return this.http.patch<void>(`${this.base}/cerrar/${idVacante}`, {});
  }
  
}
