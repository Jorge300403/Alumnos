import { Routes } from '@angular/router';
import { AgregarComponent } from '../app/agregar/agregar.component'
import { AlumnosComponent } from '../app/alumnos/alumnos.component'
import { EditarComponent } from './editar/editar.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo:'/alumnos',
        pathMatch: 'full'
    },
    {
        path:'alumnos',
        component: AlumnosComponent,
    },
    {
        path:'agregar',
        component: AgregarComponent,
    },
    {
        path:'editar/:id',
        component: EditarComponent,
    },
];
