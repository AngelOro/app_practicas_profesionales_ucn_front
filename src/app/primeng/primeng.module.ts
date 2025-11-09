import { NgModule } from '@angular/core';

// Solo importa los módulos que realmente usas
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { TagModule } from 'primeng/tag';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
  exports: [
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    CheckboxModule,
    ToastModule,
    TagModule,
    SelectModule,
    TextareaModule,
    ToolbarModule,
    MenuModule,
    PanelMenuModule,
    AvatarModule,
    BadgeModule,
    BreadcrumbModule
  ]
})
export class PrimengModule {}