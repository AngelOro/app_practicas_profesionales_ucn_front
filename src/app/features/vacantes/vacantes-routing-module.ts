import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacantesPage } from './pages/vacantes-page/vacantes-page';

const routes: Routes = [{ path: '', component: VacantesPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacantesRoutingModule { }
