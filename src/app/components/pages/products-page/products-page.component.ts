import { Component, OnInit } from '@angular/core';
import {Product} from "../../common/products/products.component";
import {ProductsService} from "../../../services/products.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  products: Product[] = []
  isLoading: boolean = false
  searchForm: FormGroup
  constructor(
    private _productsService: ProductsService,
    private _fb: FormBuilder
  ) {
    this.searchForm = this._fb.group({
      searchValue: ['', []],
      searchField: ['title', []],
    })
  }

  ngOnInit(): void {
    this.isLoading = true
    try{
      this.products = this._productsService.getProducts()
    }catch (e) {
      console.log(e)
    }finally {
      this.isLoading = false
    }
  }

}
