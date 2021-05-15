import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import tilt from 'vanilla-tilt';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent implements OnInit, AfterViewInit {
  @ViewChild('.your-element') myDiv: ElementRef;
  data = [];
  constructor() {

  }

  ngOnInit(): void {
    this.data = [{
      title: "Colorless Soul",
      date: "12 Dec 2020",
      description: "The drawing was inspired from a very painful insident happened before my eyes. ",
      image: "/assets/images/creativa-logo.jpg"
    },
    {
      title: "Colorless Soul",
      date: "12 Dec 2020",
      description: "The drawing was inspired from a very painful insident happened before my eyes. ",
      image: "/assets/images/banner.jpg"
    },{
      title: "Colorless Soul",
      date: "12 Dec 2020",
      description: "The drawing was inspired from a very painful insident happened before my eyes. ",
      image: "/assets/images/creativa-logo.jpg"
    },
    {
      title: "Colorless Soul",
      date: "12 Dec 2020",
      description: "The drawing was inspired from a very painful insident happened before my eyes. ",
      image: "/assets/images/creativa-logo.jpg"
    }]
  }

  ngAfterViewInit() {
    let nodeArray = [];
    document.querySelectorAll('.glass-card').forEach(elem => {
      nodeArray.push(elem);
    })
    tilt.init(nodeArray, {
      max: 25,
      speed: 400
    });
  }
}
