import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { EmpresasService } from '../../services/empresas';
import { Empresa } from '../../models/empresa.model';
import { PrimengModule } from '../../../../primeng/primeng.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empresas-page',
  templateUrl: './empresas-page.html',
  imports: [PrimengModule, FormsModule, CommonModule],
  styleUrl: './empresas-page.scss',
  providers: [MessageService]
})
export class EmpresasPage implements OnInit {
  empresas: Empresa[] = [];

  dialog = false;
  saving = false;
  submitted = false;
  editing: Empresa | null = null;

  form: Partial<Empresa> = {
    nombre: '',
    nit: '',
    correo: '',
    telefono: '',
    activo: true
  };

  constructor(
    private empresasService: EmpresasService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.loadEmpresas();
  }

  loadEmpresas() {
    this.empresasService.list().subscribe({
      next: (data) => {
        this.empresas = data.map(e => ({
          ...e,
          // fuerza boolean real
          activo: e.activo === true
        }));
      },
      error: () =>
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudieron cargar las empresas' }),
    });
  }

  openNew() {
    this.form = { nombre: '', nit: '', correo: '', telefono: '', activo: true };
    this.editing = null;
    this.submitted = false;
    this.dialog = true;
  }

  openEdit(empresa: Empresa) {
    this.form = { ...empresa };
    this.editing = empresa;
    this.submitted = false;
    this.dialog = true;
  }

  // --- Validación simple ---
  isInvalid(field: keyof Empresa): boolean {
    if (!this.submitted) return false;
    const v = this.form[field];
    return !(typeof v === 'string' && v.trim().length > 0);
  }

  isEmail(v?: string): boolean {
    return !!v && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  isFormValid(): boolean {
    return !(
      this.isInvalid('nombre') ||
      this.isInvalid('nit') ||
      this.isInvalid('correo') ||
      this.isInvalid('telefono') ||
      (this.form.correo && !this.isEmail(this.form.correo))
    );
  }

  // --- Guardar (create/update) ---
  save() {
    this.submitted = true;
    if (!this.isFormValid()) return;

    this.saving = true;

    const req$ = this.editing
      ? this.empresasService.update(this.form.idEmpresa!, {
          nombre: this.form.nombre!.trim(),
          nit: this.form.nit!.trim(),
          correo: this.form.correo!.trim(),
          telefono: this.form.telefono!.trim(),
          activo: !!this.form.activo
        })
      : this.empresasService.create({
          nombre: this.form.nombre!.trim(),
          nit: this.form.nit!.trim(),
          correo: this.form.correo!.trim(),
          telefono: this.form.telefono!.trim()
        });

    req$.subscribe({
      next: () => {
        this.loadEmpresas();
        this.dialog = false;
        this.saving = false;
        this.messageService.add({
          severity: 'success',
          summary: this.editing ? 'Actualizada' : 'Creada',
          detail: `Empresa ${this.editing ? 'actualizada' : 'creada'} correctamente`
        });
      },
      error: () => {
        this.saving = false;
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo guardar la empresa' });
      }
    });
  }

  // --- Desactivar (soft-delete) ---
  desactivar(emp: Empresa) {
    if (!confirm(`¿Desactivar la empresa "${emp.nombre}"?`)) return;
    this.empresasService.desactivar(emp.idEmpresa).subscribe({
      next: (e) => {
        // actualiza en memoria (o recarga)
        const idx = this.empresas.findIndex(x => x.idEmpresa === emp.idEmpresa);
        if (idx > -1) this.empresas[idx] = { ...e, activo: e.activo === true };
        this.messageService.add({ severity: 'success', summary: 'Desactivada', detail: 'Se desactivó la empresa' });
      },
      error: () =>
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo desactivar' }),
    });
  }
}
