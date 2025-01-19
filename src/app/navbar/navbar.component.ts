import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [RouterModule]
})
export class NavbarComponent {

  constructor(private router: Router) {}

  navigateToContact() {
    this.router.navigate(['/contact']);
  }
}
