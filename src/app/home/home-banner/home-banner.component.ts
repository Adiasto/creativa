import { Component, OnInit, AfterViewInit } from '@angular/core';
import tilt from 'vanilla-tilt';
import Rellax from 'rellax';
@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    let nodeArray = [];
    document.querySelectorAll('#banner-holder').forEach(elem => {
      nodeArray.push(elem);
    })
    tilt.init(nodeArray, {
      max: 25,
      speed: 400
    });

    var rellax = new Rellax('.rellax');
  }
}
