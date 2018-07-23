import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopoComponent } from './body/layout/topo/topo.component';
import { MenuComponent } from './body/layout/menu/menu.component';
import { ContentComponent } from './body/layout/content/content.component';
import { LayoutComponent } from './body/layout/layout.component';
import { MaterialModule } from './material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestureConfig } from '@angular/material';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { TestesComponent } from './comp/testes/testes.component';
import { ParallaxAreaComponent } from './comp/parallax-area/parallax-area.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { InicialAComponent } from './comp/inicial-a/inicial-a.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    MenuComponent,
    ContentComponent,
    LayoutComponent,
    HomeComponent,
    PerfilComponent,
    TestesComponent,
    ParallaxAreaComponent,
    InicialAComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    PerfectScrollbarModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: GestureConfig,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
