import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Button } from 'primeng/button';
import { Menubar } from 'primeng/menubar';
import { PanelMenu } from 'primeng/panelmenu';

import { RouterModule } from '@angular/router';
import { PrimengModule } from '../primeng/primeng.module';

@NgModule({
  imports: [CommonModule, RouterModule, Button, Menubar, PanelMenu, PrimengModule],
  exports: [Button, Menubar, PanelMenu, PrimengModule]
})
export class SharedModule {}
