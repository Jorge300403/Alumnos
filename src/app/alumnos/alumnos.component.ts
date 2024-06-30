import { Component, OnInit, inject  } from '@angular/core';
import { Alumno } from '../Modelos/Alumno';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AlumnoService } from '../alumno.service';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [TableModule, CommonModule, HttpClientModule, ButtonModule, DialogModule, InputTextModule],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent implements OnInit {
  alumnos: Alumno[] = [];

  constructor(
    private alumnoService: AlumnoService, 
    private router: Router
  ) { }

  httpClient = inject(HttpClient);
  ngOnInit(): void {
    this.getAlumnos();
  }

  getAlumnos(): void {
    this.alumnoService.getAlumnos().subscribe(
      (alumnos) => {
        this.alumnos = alumnos;
      }
    );
  }

  eliminarAlumno(id: number): void {
    this.alumnoService.deleteAlumno(id).subscribe(() => {
      this.getAlumnos();  // Actualiza la lista de alumnos después de eliminar
    });
  }

  editarAlumnos(id: number): void{
    this.router.navigate(['/editar', id]);
  }

}
