import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { EmpresasService } from '../../services/empresas';
import { Empresa } from '../../models/empresa.model';
import { PrimengModule } from '../../../../primeng/primeng.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empresas-page',
  templateUrl: './empresas-page.html',
  imports: [PrimengModule, FormsModule],
  styleUrl: './empresas-page.scss',
  providers: [MessageService]
})
export class EmpresasPage implements OnInit {
  empresas: Empresa[] = [];
  empresaDialog = false;
  empresa: Partial<Empresa> = {};
  submitted = false;

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
          activo: e.activo === true,
        }));
      },
      error: () =>
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudieron cargar las empresas' }),
    });
}

  openNew() {
    this.empresa = {};
    this.submitted = false;
    this.empresaDialog = true;
  }

  editEmpresa(emp: Empresa) {
    this.empresa = { ...emp };
    this.empresaDialog = true;
  }

  deleteEmpresa(emp: Empresa) {
    if (confirm(`¿Eliminar la empresa "${emp.nombre}"?`)) {

    }
  }

  hideDialog() {
    this.empresaDialog = false;
    this.submitted = false;
  }

  saveEmpresa() {
    this.submitted = true;
    if (!this.empresa?.nombre?.trim() || !this.empresa?.nit?.trim()
        || !this.empresa?.correo?.trim() || !this.empresa?.telefono?.trim()) {
      return;
    }

    this.empresasService.create({
      nombre: this.empresa.nombre!,
      nit: this.empresa.nit!,
      correo: this.empresa.correo!,
      telefono: this.empresa.telefono!,
    }).subscribe({
      next: () => {
        this.loadEmpresas();
        this.messageService.add({ severity: 'success', summary: 'Creada', detail: 'Empresa creada' });
        this.empresaDialog = false;
      }
    });
  }

}
