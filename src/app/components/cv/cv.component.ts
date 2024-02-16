import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {
  cvData: any; // Variable para almacenar los datos del CV

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id']; // Obtiene el parámetro ID de la URL
      this.obtenerDatosCV(id); // Llama a la función para obtener los datos del CV
    });
  }

  obtenerDatosCV(id: number): void {
    this.dataService.obtenerCVPorID(id).subscribe(
      data => {
        this.cvData = data;
        this.calcularEdadParaUsuarios(this.cvData);
      },
      error => {
        console.error('Error al obtener los datos del CV:', error);
        // Manejo de errores, por ejemplo, mostrar un mensaje al usuario
      }
    );
  }

  calcularEdadParaUsuarios(cvData: any): void {
    const fechaNacimiento = new Date(cvData.fechanacimiento);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      cvData.edad = edad - 1;
    } else {
      cvData.edad = edad;
    }
  }
}

