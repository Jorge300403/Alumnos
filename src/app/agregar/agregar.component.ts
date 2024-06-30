import { Component } from '@angular/core';  
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlumnoService } from '../alumno.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, FloatLabelModule, ButtonModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {

  alumnoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alumnoService: AlumnoService,
    private router: Router
  ) {
    this.alumnoForm = this.fb.group({
      nombre: ['', Validators.required],
      paterno: ['', Validators.required],
      materno: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.alumnoForm.valid) {
      this.alumnoService.createAlumno(this.alumnoForm.value).subscribe(() => {
        this.router.navigate(['/alumnos']); // Redirigir a la lista de alumnos después de agregar
      });
    }
  }

}
