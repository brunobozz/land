import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//base libraries
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestureConfig } from '@angular/material';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ParallaxScrollModule } from 'ng2-parallaxscroll';

//routing
import { AppRoutingModule } from './/app-routing.module';

//template
import { AppComponent } from './app.component';
import { LayoutComponent } from './body/layout/layout.component';
import { TopoComponent } from './body/layout/topo/topo.component';
import { MenuComponent } from './body/layout/menu/menu.component';
import { ContentComponent } from './body/layout/content/content.component';

//pages
import { PerfilComponent } from './pages/perfil/perfil.component';
import { HomeModule } from './pages/home/home.module';

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
    PerfilComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    PerfectScrollbarModule,
    HomeModule,
    ParallaxScrollModule
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
