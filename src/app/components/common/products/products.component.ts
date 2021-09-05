import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../../services/products.service";

export interface ProductCard {
  id: number,
  imageUrl: string,
  title: string,
  price: string,
  description: string,
  rating: number
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: ProductCard[] = []

  constructor(
    private _productService: ProductsService
  ) {
  }

  ngOnInit(): void {
    this.products = this._productService.getProducts()
  }

}
