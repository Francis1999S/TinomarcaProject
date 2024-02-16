import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tinogastagob',
  templateUrl: './tinogastagob.component.html',
  styleUrls: ['./tinogastagob.component.css']
})
export class TinogastagobComponent {

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      window.location.href = 'https://www.tinogasta.gob.ar/index.html';
    }, 2000);
  }
}
