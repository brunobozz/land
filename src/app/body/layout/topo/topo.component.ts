import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss']
})
export class TopoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  trocaIdioma(lang){
    $('body').removeClass('ENG');
    $('body').removeClass('POR');
    $('body').removeClass('ESP');
    $('body').addClass(lang);
  }

  vaiMenu(section){
    var link = '#'+section;
    $('html, body').animate({scrollTop:$( link ).position().top-60}, 'slow');
  }

}
