import { Component, OnInit, AfterContentInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-parallax-area',
  templateUrl: './parallax-area.component.html',
  styleUrls: ['./parallax-area.component.scss']
})
export class ParallaxAreaComponent implements OnInit {

  constructor() { }



  ngOnInit() {

    $('div.bg-parallax').each(function () {
      var $obj = $(this);

      $(window).scroll(function () {
        var yPos = -($(window).scrollTop() / $obj.data('speed'));

        var bgpos = '50% ' + yPos + 'px';

        $obj.css('background-position', bgpos);

      });
    });

  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    console.log('coco');
  }

}
