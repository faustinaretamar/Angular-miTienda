import { Component } from '@angular/core';
import { Router } from '@angular/router';
import productsData from '../assets/products.json';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductComponent, CarouselModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = productsData;
  filteredProducts = productsData;
  searchText = '';

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  constructor(private router: Router) {}

  onSearchChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchText = target.value.toLowerCase();
    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(this.searchText)
    );
  }

  navigateToDetail(productId: number): void {
    this.router.navigate(['/product-detail', productId]);
  }
}
