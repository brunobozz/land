import { Component, OnInit, AfterContentInit } from '@angular/core';
import * as Parallax from 'parallax-js';

declare var Parallax: any;

@Component({
  selector: 'app-parallax-area',
  templateUrl: './parallax-area.component.html',
  styleUrls: ['./parallax-area.component.scss']
})
export class ParallaxAreaComponent implements OnInit, AfterContentInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      hoverOnly: true
    });
  }

}
