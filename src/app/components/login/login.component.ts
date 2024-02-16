import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  dni: string = '';
  mensaje: string = ''; // Variable para almacenar el mensaje

  constructor(private router: Router, private dataService: DataService) {}

navigateToRegister() {
  this.router.navigate(['/5VawIOyKYCvy7jA6jSYhj6yX1tukL0p4FTYyUZpRyS6S9LsiyvbCSIPFa5w8D4P2ZJ5fOC73kbJDrM82IzyToSUYTf8t1y7AKgev9BdshD1qHLPq1UJkEd7CyFom0OFGroU34mAO0r8wPiprj0EVuq']);
}

verificarDNI(): void {
  this.dataService.verificarExistenciaDNI(this.dni).subscribe(
    response => {
      if (response.existe) {
        this.mensaje = '¡Se ha encontrado un CV asociado a tu DNI, por lo tanto, tu CV será actualizado si continúas!';
      } else {
        this.mensaje = '¡No se ha encontrado ningún CV asociado a tu D.N.I. en la Base de Datos, por lo tanto, crearás un nuevo CV si continúas!';
      }
    },
    error => {
      console.error('Error al verificar DNI:', error);
        this.mensaje = 'Se produjo un error al verificar el DNI.';
    }
  );
}

}
