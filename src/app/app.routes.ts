import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'vacantes',
    loadChildren: () =>
      import('./features/vacantes/vacantes-module').then(m => m.VacantesModule),
  },
  {
    path: 'empresas',
    loadChildren: () =>
      import('./features/empresas/empresas-module').then(m => m.EmpresasModule),
  },
  {
    path: 'estudiantes',
    loadChildren: () =>
      import('./features/estudiantes/estudiantes-module').then(m => m.EstudiantesModule),
  },
  { path: '', pathMatch: 'full', redirectTo: 'vacantes' },
  { path: '**', redirectTo: 'vacantes' }
];
