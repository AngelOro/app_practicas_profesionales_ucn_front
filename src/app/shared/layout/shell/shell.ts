import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BadgeModule } from 'primeng/badge';
import { filter } from 'rxjs';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [ CommonModule, ToolbarModule, MenuModule, PanelMenuModule, ButtonModule,
    AvatarModule, BadgeModule, BreadcrumbModule, InputTextModule],
  templateUrl: './shell.html',
  styleUrls: ['./shell.scss']
})
export class Shell {
  // Cambiar de getter a propiedad normal
  breadcrumbItems: MenuItem[] = [
    { label: 'Inicio', icon: 'pi pi-home', routerLink: ['/'] }
  ];

  // popup menu (mobile)
  appMenu: MenuItem[] = [
    { label: 'Empresas', icon: 'pi pi-building', command: () => this.router.navigate(['/empresas']) },
    { label: 'Vacantes', icon: 'pi pi-briefcase', command: () => this.router.navigate(['/vacantes']) },
    { label: 'Estudiantes', icon: 'pi pi-users', command: () => this.router.navigate(['/estudiantes']) },
  ];

  // drawer casero
  drawerOpen = false;

  constructor(public router: Router) {
    // Actualizar breadcrumb cuando cambia la ruta
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        this.updateBreadcrumb();
      });
  }

  private updateBreadcrumb(): void {
    const url = this.router.url.split('?')[0];
    const map: Record<string, string> = {
      '/empresas': 'Empresas',
      '/vacantes': 'Vacantes',
      '/estudiantes': 'Estudiantes',
    };

    this.breadcrumbItems = [
      { label: 'Inicio', icon: 'pi pi-home', routerLink: ['/'] }
    ];

    if (map[url]) {
      this.breadcrumbItems.push({ label: map[url] });
    }
  }
}
