export interface Estudiante {
  id: string;
  documento: string;
  nombres: string;
  apellidos: string;
  correo: string;
  programa?: string;
  semestre?: number;
  activo: boolean;
}
