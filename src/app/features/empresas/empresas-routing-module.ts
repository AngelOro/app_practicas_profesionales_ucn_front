import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesPage } from '../estudiantes/pages/estudiantes-page/estudiantes-page';

const routes: Routes = [{ path: '', component: EstudiantesPage }];;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule { }
