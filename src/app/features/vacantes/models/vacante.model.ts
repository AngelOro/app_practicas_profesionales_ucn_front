export interface Vacante {
  id: string;
  titulo: string;
  descripcion?: string;
  empresaId: string;          // relación
  modalidad?: 'PRESENCIAL' | 'REMOTO' | 'HIBRIDO';
  ciudad?: string;
  estado: 'ABIERTA' | 'CERRADA';
}
