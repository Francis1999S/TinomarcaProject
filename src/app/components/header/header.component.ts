import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }
  navigateToBBDD() {
    this.router.navigate(['/BBDD']);
  }
  navigateToLogin() {
    this.router.navigate(['/7fcC09UsfpmYTOqeJCUay4AHrkiBC4K9teaDmbcXv6TtiAMh4MP5pMAwt2Hpi1pRY132vkXEW2YjYIwxCJvjr1Wofg29CMeFgF0Q5be3qguZL2yiMHZjoBS0eLtsTaz8LhxS3zP1g5qmWCs4LJC6Qg']);
  }
  navigateToTinogastagob() {
    this.router.navigate(['/tinogastagob']);
  }
}
