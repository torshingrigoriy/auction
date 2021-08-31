import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.css']
})
export class ProductRatingComponent implements OnInit {
  @Input() rating: number = 0;
  stars: boolean[] = []

  constructor() {
  }

  ngOnInit(): void {
    let o = (this.createRating())
    console.log(o)
  }

  createRating(): void {
    for (let j = 0; j < this.rating; j++) {
      this.stars.push(true)
    }
    for (let i = 0; i < 5 - this.rating; i++) {
      this.stars.push(false)
    }
  }
}
