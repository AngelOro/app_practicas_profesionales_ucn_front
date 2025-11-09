import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../../empresas/models/empresa.model';
import { CrearVacanteRequest, EditarVacanteRequest, Vacante } from '../../models/vacante.model';
import { EmpresasService } from '../../../empresas/services/empresas';
import { Vacantes } from '../../services/vacantes';
import { MessageService } from 'primeng/api';
import { PrimengModule } from '../../../../primeng/primeng.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Header } from '../../../../shared/layout/header/header';

@Component({
  selector: 'app-vacantes-page',
  imports: [PrimengModule, FormsModule, CommonModule, Header ],
  templateUrl: './vacantes-page.html',
  styleUrl: './vacantes-page.scss',
  providers: [MessageService],
})
export class VacantesPage implements OnInit {
  vacantes: Vacante[] = [];
  empresas: Empresa[] = [];
  dialog = false;
  editing: Vacante | null = null;

  submitted = false;
  saving = false;

  form: { idEmpresa?: number; titulo?: string; descripcion?: string } = {};

  constructor(
    private svc: Vacantes,
    private empresasSvc: EmpresasService,
    private msg: MessageService
  ) {}

  ngOnInit(): void {
    this.load();
    this.empresasSvc.list().subscribe((e) => (this.empresas = e));
  }

  load(): void {
    this.svc.listarTodos({ page: 0, size: 20 }).subscribe((v) => (this.vacantes = v));
  }

  // Método helper para obtener nombre de empresa
  getEmpresaNombre(idEmpresa: number): string {
    return this.empresas.find((e) => e.idEmpresa === idEmpresa)?.nombre || String(idEmpresa);
  }

  openNew(): void {
    this.editing = null;
    this.submitted = false;
    this.form = { idEmpresa: this.empresas[0]?.idEmpresa, titulo: '', descripcion: '' };
    this.dialog = true;
  }

  openEdit(v: Vacante): void {
    this.editing = v;
    this.submitted = false;
    this.form = { idEmpresa: v.idEmpresa, titulo: v.titulo, descripcion: v.descripcion };
    this.dialog = true;
  }

  isInvalid(field: keyof typeof this.form): boolean {
    // requerido: idEmpresa, titulo, descripcion
    if (!this.submitted) return false;
    const val = this.form[field];
    if (field === 'idEmpresa') return !(typeof val === 'number' && val > 0);
    return !(typeof val === 'string' && val.trim().length > 0);
  }
  isFormValid(): boolean {
    return !(
      this.isInvalid('idEmpresa') ||
      this.isInvalid('titulo') ||
      this.isInvalid('descripcion')
    );
  }
  save(): void {
    this.submitted = true;
    if (!this.isFormValid()) return;

    this.saving = true;

    if (!this.form.idEmpresa || !this.form.titulo?.trim() || !this.form.descripcion?.trim()) return;

    if (this.editing) {
      const payload: EditarVacanteRequest = {
        titulo: this.form.titulo,
        descripcion: this.form.descripcion,
      };
      this.svc.editar(this.editing.idVacante, payload).subscribe({
        next: () => {
          this.load();
          this.dialog = false;
          this.saving = false;
          this.msg.add({ severity: 'success', summary: 'Actualizada' });
        },
        error: () => {
          this.saving = false;
          this.msg.add({ severity: 'error', summary: 'Error', detail: 'No se pudo actualizar' });
        }
      });
    } else {
      const payload: CrearVacanteRequest = this.form as CrearVacanteRequest;
      this.svc.crear(payload).subscribe({
        next: () => {
          this.load();
          this.dialog = false;
          this.saving = false;
          this.msg.add({ severity: 'success', summary: 'Creada' });
        },
        error: () => {
          this.saving = false;
          this.msg.add({ severity: 'error', summary: 'Error', detail: 'No se pudo crear' });
        }
      });
    }
  }

  cerrar(v: Vacante): void {
    if (!confirm(`¿Cerrar la vacante "${v.titulo}"?`)) return;
    this.svc.cerrar(v.idVacante).subscribe({
      next: () => {
        this.load();
        this.msg.add({ severity: 'success', summary: 'Cerrada' });
      },
    });
  }
}
