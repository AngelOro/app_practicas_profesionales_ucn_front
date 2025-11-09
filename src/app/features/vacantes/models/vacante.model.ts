export interface Vacante {
  idVacante: number;
  idEmpresa: number;           
  titulo: string;
  descripcion: string;
  estado: 'ABIERTA' | 'CERRADA';
  fechaPublicacion: string;   
  programa?: string;
  ciudad?: string;
  modalidad?: 'PRESENCIAL' | 'REMOTO' | 'HIBRIDO';
}

export interface CrearVacanteRequest {
  idEmpresa: number;
  titulo: string;
  descripcion: string;
}

export interface EditarVacanteRequest {
  titulo?: string;
  descripcion?: string;
}
