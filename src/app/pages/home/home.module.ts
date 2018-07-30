import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { InicialAComponent } from '../../comp/inicial-a/inicial-a.component';
import { SobreComponent } from '../../comp/sobre/sobre.component';
import { LinksComponent } from '../../comp/links/links.component';
import { ParallaxAreaComponent } from '../../comp/parallax-area/parallax-area.component';
import { MapaComponent } from '../../comp/mapa/mapa.component';
import { RodapeComponent } from '../../comp/rodape/rodape.component';
import { MaterialModule } from '../../material.module';
import { ContatoComponent } from '../../comp/contato/contato.component';
import { EquipeComponent } from '../../comp/equipe/equipe.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    HomeComponent,
    InicialAComponent,
    SobreComponent,
    LinksComponent,
    ParallaxAreaComponent,
    MapaComponent,
    RodapeComponent,
    ContatoComponent,
    RodapeComponent,
    EquipeComponent
  ]
})
export class HomeModule { }