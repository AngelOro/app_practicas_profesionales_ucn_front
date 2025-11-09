import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, PrimengModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {

}
