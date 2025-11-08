import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Button } from 'primeng/button';
import { Menubar } from 'primeng/menubar';
import { PanelMenu } from 'primeng/panelmenu';

import { Shell } from './layout/shell/shell';
import { Header } from './layout/header/header';
import { Sidebar } from './layout/sidebar/sidebar';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule, Button, Menubar, PanelMenu, Shell, Header, Sidebar],
  exports: [Shell, Header, Sidebar]
})
export class SharedModule {}
