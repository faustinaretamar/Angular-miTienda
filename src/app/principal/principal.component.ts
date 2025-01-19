import { Component } from '@angular/core';
import { ContactPageComponent } from '../contact-page/contact-page.component';
import { ProductsComponent } from '../products/products.component';
@Component({
  selector: 'app-principal',
  imports: [ContactPageComponent, ProductsComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
