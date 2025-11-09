import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',  
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @Input() icon = 'pi pi-folder';
  @Input() title = '';
  @Input() subtitle = ''; 
}
