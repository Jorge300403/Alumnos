import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from './Modelos/Alumno';
import { environment } from '../Environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  //private apiUrl = 'http://localhost:8083/api/alumnos';
  private apiUrl = `${environment.apiUrl}/alumnos`;


  constructor(private http: HttpClient) { }

  getAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.apiUrl);
  }

  createAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(this.apiUrl, alumno);
  }

  updateAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http.put<Alumno>(`${this.apiUrl}/${alumno.id}`, alumno);
  }

  deleteAlumno(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getAlumnoById(id: number): Observable<Alumno>{
    return this.http.get<Alumno>(`${this.apiUrl}/${id}`);
  }
}
