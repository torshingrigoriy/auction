import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.css']
})
export class ProductRatingComponent implements OnInit {
  @Input() get rating(): number {
    return this._rating || 0;
  };
  @Input() disableRate: boolean = true
  private _rating: number | undefined;
  maxRating: number = 5;
  stars: boolean[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.stars = Array(this.maxRating).fill(true, 0, this.rating);
    console.log(this.stars);
  }

}
