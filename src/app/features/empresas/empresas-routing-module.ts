import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasPage } from './pages/empresas-page/empresas-page';

const routes: Routes = [{ path: '', component: EmpresasPage }];;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule { }
