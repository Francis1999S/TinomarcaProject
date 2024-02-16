import { Component, ViewChild, TemplateRef } from '@angular/core';
import { fadeInOut } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInOut],
})
export class AppComponent {
  title = 'Tinogasta Municipio';
}
