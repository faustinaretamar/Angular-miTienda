import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: any;

  constructor(private router: Router) {}

  navigateToDetail(): void {
    this.router.navigate([`/product-detail/${this.product.id}`]);
  }
}
