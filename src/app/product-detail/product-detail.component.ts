import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import productsData from '../assets/products.json';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  product: any;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id')); // Conversión a número
    this.product = productsData.find((p) => p.id === productId); // Comparación como número
  }

  addToCart(): void {
    alert('Producto agregado al carrito');
  }

  goBack(): void {
    this.location.back();
  }
}
