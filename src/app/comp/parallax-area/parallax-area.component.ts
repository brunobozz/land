import { Component, OnInit, AfterContentInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-parallax-area',
  templateUrl: './parallax-area.component.html',
  styleUrls: ['./parallax-area.component.scss']
})
export class ParallaxAreaComponent implements OnInit {

  constructor() { }

  public objeto: any;

  ngOnInit() {
    this.objeto = $('.parallax-area');
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    console.log(this.objeto);
    var yPos = -($(window).scrollTop() / this.objeto.data('speed'))+40;
    var bgpos = '50% ' + yPos + 'px';
    this.objeto.css('background-position', bgpos);
  }

}
