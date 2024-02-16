import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bbdd',
  templateUrl: './bbdd.component.html',
  styleUrls: ['./bbdd.component.css'],
})
export class BBDDComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getUsuarios().subscribe((data) => {
      this.usuarios = data;
      this.calcularEdadParaUsuarios(); // Llamar a la función aquí después de cargar los usuarios
    });
  }

  calcularEdadParaUsuarios(): void {
    this.usuarios.forEach(usuario => {
      const fechaNacimiento = new Date(usuario.fechanacimiento);
      const hoy = new Date();
      const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
      const mes = hoy.getMonth() - fechaNacimiento.getMonth();

      if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        usuario.edad = edad - 1;
      } else {
        usuario.edad = edad;
      }
    });
  }

  verDetallesCV(id: number): void {
    this.router.navigate(['/cahGtVcYjPzhDz4KkcKLokdqS56PDV5wLYFurV1yJrcac8tZ87TQY7Y6Sbi51PTT2qpw9cXWP8U5q1kZ33Li1OMljHxKLkVV9gvFGyyZKMmKOM3RgGMbxp328rlpd1ErpvRYKQwTI1FJfHEVDdVB14', id]);
  }
}
