export interface Estudiante {
  idEstudiante: number;
  codigo: string;
  nombre: string;
  correo: string;
  programa: string;
  activo: boolean | null;
}

export interface CrearEstudianteRequest {
  codigo: string;
  nombre: string;
  correo: string;
  programa: string;
}