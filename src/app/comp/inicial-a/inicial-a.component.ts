import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-inicial-a',
  templateUrl: './inicial-a.component.html',
  styleUrls: ['./inicial-a.component.scss']
})
export class InicialAComponent implements OnInit {

  constructor() { }

  public objeto: any;

  ngOnInit() {
    this.objeto = $('.inicial-a');
  }

  @HostListener('window:scroll', [])
  onScroll() {
    //============================ SOME LOGO =================
    var siteAltura = $(document).scrollTop();
    if (siteAltura >= 0 && siteAltura < 300) {
      $('.logo').css('opacity', 1 - siteAltura / 3 * 0.01);
    } else {
      $('.logo').css('opacity', 0);
    }


    console.log(this.objeto);
    var yPos = -($(window).scrollTop() / this.objeto.data('speed'));
    var bgpos = '50% ' + yPos + 'px';
    this.objeto.css('background-position', bgpos);
    
  }

}
