import { Component, OnInit } from '@angular/core';
import { DataService } from './../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  usuario = {
    nombre: '',
    apellido: '',
    dni: '',
    fechanacimiento: '',
    genero: '',
    estadocivil: '',
    disponibilidadhoraria: '',
    telefono: '',
    email: '',
    residencia: '',
    titulosuperior: '',
    institucionsuperior: '',
    titulosecundario: '',
    institucionsecundaria: '',
    especialidades: '',
    idiomas: '',
    nivelidioma: '',
    empresa1: '',
    descripcion1: '',
    fechainicio1: '',
    fechafin1: '',
    empresa2: '',
    descripcion2: '',
    fechainicio2: '',
    fechafin2: '',
    empresa3: '',
    descripcion3: '',
    fechainicio3: '',
    fechafin3: '',
    carnet: '',
    dispviajar: '',
    miresumen: '',
    habilidadblanda1: '',
    habilidadblanda2: '',
    habilidadblanda3: '',
    habilidadblanda4: '',
    habilidadblanda5: '',
    habilidadtecnica1: '',
    habilidadtecnica2: '',
    habilidadtecnica3: '',
    habilidadtecnica4: '',
    habilidadtecnica5: '',
    niveleducacion: '',
    fechafinsecundaria: '',
    fechafinuniversidad: '',
    domicilio: '',
    fechacarga: '',
  };

  constructor(private dataService: DataService,  private router: Router) {}

  onSubmit() {

      // Obtener la fecha de hoy en formato ISO 8601 (YYYY-MM-DD)
  const fechaHoy = new Date().toISOString().split('T')[0];
  
  // Asignar la fecha de hoy a la propiedad fechacarga del objeto usuario
  this.usuario.fechacarga = fechaHoy;

    // Llamada al servicio para insertar el nuevo usuario en la base de datos
    this.dataService.insertarUsuario(this.usuario).subscribe((response) => {
      console.log('Usuario insertado correctamente', response);
      // Puedes realizar acciones adicionales después de la inserción si es necesario
    });
  }

  navigateToResults() {
    this.router.navigate(['/m2DxKqfMK4TYKq16lC5lwVlHGfTpP7whA2sq4HbZb2E8glStrGrlxMIcbhyBgz5FUs85sKIear2H74bXjM4jZ6SehEdWFjCf4KqREP3W7UySEH7lgUoWQIPxmPmIHi3PFxxsU5t4e4rocZF4IpoZkA']);
  }
}
