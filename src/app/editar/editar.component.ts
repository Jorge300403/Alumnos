import { Component, OnInit} from '@angular/core'; 
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { Alumno } from '../Modelos/Alumno';
import { ActivatedRoute } from '@angular/router';
import { AlumnoService } from '../alumno.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [ CommonModule, HttpClientModule, ReactiveFormsModule, FloatLabelModule, ButtonModule, FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit {
  alumno: Alumno = new Alumno();

  constructor(
    private route: ActivatedRoute,
    private alumnoService: AlumnoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(id)) {
      this.alumnoService.getAlumnoById(id).subscribe((alumno) => {
        this.alumno = alumno;
      });
    } else {
      console.error("El ID proporcionado no es válido");
    }
  }

  actualizarAlumno(): void {
    this.alumnoService.updateAlumno(this.alumno).subscribe(() => {
      this.router.navigate(['/alumnos']);
      // Redirigir a la lista de alumnos después de la actualización
    });
  }
}