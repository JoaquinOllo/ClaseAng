import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPeliculaComponent } from './pelicula/componentes/lista-pelicula/lista-pelicula.component';
import { Pelicula } from './pelicula/model/pelicula';
import { PeliculaServiceBase } from './pelicula/service/pelicula-service-base';
import {PeliculaService} from './pelicula/service/pelicula-service.service';
import { PeliculaServiceTest } from './pelicula/service/pelicula-service-test.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaPeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide:PeliculaServiceBase, useClass:PeliculaService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
