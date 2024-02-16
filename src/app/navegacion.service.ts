import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavegacionService {
  private mostrarComponenteSubject = new BehaviorSubject<string>('Home');

  mostrarComponente(c: string) {
    this.mostrarComponenteSubject.next(c);
  }

  obtenerMostrarComponenteObservable(): Observable<string> {
    return this.mostrarComponenteSubject.asObservable();
  }
}
