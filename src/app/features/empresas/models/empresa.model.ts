export interface Empresa {
  idEmpresa: number; 
  nombre: string;
  nit: string;
  correo: string;
  telefono: string;
  activo: boolean | null;
}

export interface CrearEmpresaRequest {
  nombre: string;
  nit: string;
  correo: string;
  telefono: string;
}