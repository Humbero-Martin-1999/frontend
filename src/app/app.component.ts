import { Component, bootstrapApplication } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from '../components/home/home.component'; // Nuevo nombre
import { CreateProduct } from '../components/create-product/create-product.component'; // Nuevo nombre
import { ProductDetail } from '../components/product-detail/product-detail.component'; // Nuevo nombre

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // Importa RouterOutlet para usar <router-outlet>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class App {} // Cambiado de AppComponent a App