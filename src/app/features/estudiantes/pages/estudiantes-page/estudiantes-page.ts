import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { PrimengModule } from '../../../../primeng/primeng.module';
import { CrearEstudianteRequest, Estudiante } from '../../models/estudiante.model';
import { Estudiantes } from '../../services/estudiantes';
import { CommonModule } from '@angular/common';
import { Header } from '../../../../shared/layout/header/header';

@Component({
  selector: 'app-estudiantes-page',
  imports: [PrimengModule, FormsModule, CommonModule, Header],
  templateUrl: './estudiantes-page.html',
  styleUrl: './estudiantes-page.scss',
  providers: [MessageService],
})
export class EstudiantesPage implements OnInit {
  estudiantes: Estudiante[] = [];
  dialog = false;
  saving = false;
  submitted = false;
  form: CrearEstudianteRequest = { codigo: '', nombre: '', correo: '', programa: '' };

  constructor(private svc: Estudiantes, private msg: MessageService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.svc.listar(0, 20).subscribe((data) => {
      this.estudiantes = data.map((e) => ({ ...e, activo: e.activo === true }));
    });
  }

  openNew(): void {
    this.form = { codigo: '', nombre: '', correo: '', programa: '' };
    this.submitted = false;
    this.dialog = true;
  }

  isInvalid(field: keyof typeof this.form): boolean {
    if (!this.submitted) return false;
    const v = this.form[field];
    return !(typeof v === 'string' && v.trim().length > 0);
  }

  isEmail(v?: string): boolean {
    return !!v && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  isFormValid(): boolean {
    return !(
      this.isInvalid('codigo') ||
      this.isInvalid('nombre') ||
      this.isInvalid('programa') ||
      this.isInvalid('correo') ||
      (this.form.correo && !this.isEmail(this.form.correo))
    );
  }

  save(): void {
    this.submitted = true;
    if (!this.isFormValid()) return;

    this.saving = true;
    if (!this.form.codigo || !this.form.nombre || !this.form.correo || !this.form.programa) return;
    this.svc.crear(this.form).subscribe({
      next: () => {
        this.load();
        this.dialog = false;
        this.saving = false;
        this.msg.add({ severity: 'success', summary: 'Creado' });
      },
      error: () => {
        this.saving = false;
        this.msg.add({severity:'error', summary:'Error', detail:'No se pudo registrar'});
      }
    });
  }
}
