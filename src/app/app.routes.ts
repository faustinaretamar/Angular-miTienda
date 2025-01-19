import { Route, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NgModule } from '@angular/core';
import { PrincipalComponent } from './principal/principal.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/products', pathMatch: 'full' }, // Redirige a productos por defecto
  { path: 'contact', component: ContactComponent }, // Ruta para contacto
  { path: 'products', component: PrincipalComponent }, // Ruta para productos
  { path: 'product-detail/:id', component: ProductDetailComponent }, // Ruta para el detalle
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)], // Cambiar 'routes' a 'appRoutes'
  exports: [RouterModule],
})
export class AppRoutingModule {}
