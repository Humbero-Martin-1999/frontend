import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home.component';
import { CreateProduct } from './components/create-product/create-product.component';
import { ProductDetail } from './components/product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'create-product', component: CreateProduct },
  { path: 'product/:id', component: ProductDetail }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// Exporta routes para app.config.ts si es necesario
export { routes };