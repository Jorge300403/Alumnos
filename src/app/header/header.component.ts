import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { AgregarComponent } from '../agregar/agregar.component'
import { AlumnosComponent } from '../alumnos/alumnos.component'
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TabMenuModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Alumnos', icon: 'pi pi-chart-line', routerLink: '/alumnos'},
      { label: 'Agregar', icon: 'pi pi-list', routerLink: '/agregar'}
    ]
  }
}
