import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images: any = ['/assets/images/22.jpg', '/assets/images/dannemark.jpg', '/assets/images/equipe.jpg', '/assets/images/champion.jpg'];

  constructor() {
    // customize default values of carousels used by this component tree
    // config.interval = 10000;
    // config.wrap = false;
    //  config.keyboard = false;
    //  config.pauseOnHover = false;
  }



  ngOnInit() {

  }

}




