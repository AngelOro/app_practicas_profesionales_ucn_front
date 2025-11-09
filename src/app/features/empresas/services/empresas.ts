import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { CrearEmpresaRequest, Empresa } from '../models/empresa.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmpresasService {
  private base = `${environment.apiUrl}/api/empresas`;

  constructor(private http: HttpClient) {}

  list(page = 0, size = 20): Observable<Empresa[]> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<Empresa[]>(this.base, { params });
  }

  get(idEmpresa: number): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.base}/${idEmpresa}`);
  }

  create(payload: CrearEmpresaRequest): Observable<Empresa> {
    return this.http.post<Empresa>(this.base, payload);
  }

  // ⬇️ Agregamos update. Ajusta el path si tu back usa otro.
  update(idEmpresa: number, payload: Partial<Empresa>): Observable<Empresa> {
    return this.http.put<Empresa>(`${this.base}/${idEmpresa}`, payload);
  }

  // ⬇️ Alineado con lo que te propuse antes (@PutMapping("/{id}/desactivar"))
  desactivar(idEmpresa: number): Observable<Empresa> {
    return this.http.put<Empresa>(`${this.base}/${idEmpresa}/desactivar`, {});
  }
}
