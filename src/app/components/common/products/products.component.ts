import { Component, OnInit } from '@angular/core';

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
  products: ProductCard[] = [
    {
      id: 1,
      imageUrl: 'https://autoreview.ru/images/Article/46/Article_4699_860_575.jpg',
      title: 'WV Beetle',
      price: '6000',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam beatae et laborum libero mollitia nulla officiis similique voluptas voluptatum!',
      rating: 2,
    },
    {
      id: 3,
      imageUrl: 'https://lh3.googleusercontent.com/proxy/h6k9JSbrXerIv3Js3KWuJtS_t8KQWZ0kHy_N9hBKEfmZPiEdUEut_5vUHc1JxHELVYNILWsxxMPU4jtxepERt9eeQfAYiDjF8fOMkrBZJqlpm7UWJbK4sRKuqYpL0OcLie2w4B796Q',
      title: 'WV Touareg',
      price: '16000',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam beatae et laborum libero mollitia nulla officiis similique voluptas voluptatum!',
      rating: 3,
    },
    {
      id: 2,
      imageUrl: 'https://cars1.com.ua/wp-content/uploads/2017/09/Volkswagen-Golf_R-2017-1280-01.jpg',
      title: 'WV Golf R',
      price: '12000',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam beatae et laborum libero mollitia nulla officiis similique voluptas voluptatum!',
      rating: 4,
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
