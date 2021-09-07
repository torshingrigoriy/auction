import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../common/products/products.component';
import {ProductsService} from '../../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductsService
  ) {
  }

  ngOnInit(): void {
    this.product = this._productService.getProductsById(this._route.snapshot.params['id']);
  }

}
