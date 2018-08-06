import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-inicial-a',
  templateUrl: './inicial-a.component.html',
  styleUrls: ['./inicial-a.component.scss']
})
export class InicialAComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    //============================ SOME LOGO =================
    var siteAltura = $(document).scrollTop();
    console.log(siteAltura);
    if (siteAltura >= 0 && siteAltura < 300) {
      $('.logo').css('opacity', 1 - siteAltura / 3 * 0.01);
      console.log('ta no 1');
    } else {
      $('.logo').css('opacity', 0);
      console.log('ta no 2');
    }
    }

}
