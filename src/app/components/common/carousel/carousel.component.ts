import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  items: any[] = [
    {id:1, title: 'Слайд 1', color: '#ff0000'},
    {id:2, title: 'Слайд 2', color: '#39ff00'},
    {id:3, title: 'Слайд 3', color: '#0037ff'}
  ]
  width: number | undefined;
  constructor() {

  }

  ngOnInit(): void {
  }

}
