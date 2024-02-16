import { Component } from '@angular/core';
import { NavegacionService } from './../../navegacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent { 


  constructor(
    private navegacionService: NavegacionService,
    private router: Router
  ) {}

  navigateToLogin() {
    this.router.navigate(['/7fcC09UsfpmYTOqeJCUay4AHrkiBC4K9teaDmbcXv6TtiAMh4MP5pMAwt2Hpi1pRY132vkXEW2YjYIwxCJvjr1Wofg29CMeFgF0Q5be3qguZL2yiMHZjoBS0eLtsTaz8LhxS3zP1g5qmWCs4LJC6Qg']);
  }
  navigateToBBDD() {
    this.router.navigate(['/BBDD']);
  }
  
}
