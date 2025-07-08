import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  product: Product = { id: 0, title: '', description: '', price: 0, image: '' };

  constructor(private productService: ProductService, private router: Router) {}

  onSubmit(): void {
    this.productService.createProduct(this.product).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}