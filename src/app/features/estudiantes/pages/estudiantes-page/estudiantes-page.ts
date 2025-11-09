import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { PrimengModule } from '../../../../primeng/primeng.module';
import { CrearEstudianteRequest, Estudiante } from '../../models/estudiante.model';
import { Estudiantes } from '../../services/estudiantes';

@Component({
  selector: 'app-estudiantes-page',
  imports: [PrimengModule, FormsModule],
  templateUrl: './estudiantes-page.html',
  styleUrl: './estudiantes-page.scss',
  providers: [MessageService]
})
export class EstudiantesPage implements OnInit {
    estudiantes: Estudiante[] = [];
  dialog = false;
  form: CrearEstudianteRequest = { codigo: '', nombre: '', correo: '', programa: '' };

  constructor(private svc: Estudiantes, private msg: MessageService) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.svc.listar(0, 20).subscribe(data => {
      this.estudiantes = data.map(e => ({ ...e, activo: e.activo === true }));
    });
  }

  openNew(): void {
    this.form = { codigo: '', nombre: '', correo: '', programa: '' };
    this.dialog = true;
  }

  save(): void {
    if (!this.form.codigo || !this.form.nombre || !this.form.correo || !this.form.programa) return;
    this.svc.crear(this.form).subscribe({
      next: () => { this.load(); this.dialog = false; this.msg.add({severity:'success', summary:'Creado'}); }
    });
  }
}
