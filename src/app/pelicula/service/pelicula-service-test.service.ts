import { Injectable } from '@angular/core';
import {PeliculaServiceBase} from "./pelicula-service-base";
import {Pelicula} from "../model/pelicula";

@Injectable({
  providedIn: 'root'
})
export class PeliculaServiceTest {

  public getPeliculas(){
    return [
      {id:1, titulo:"Avatar", anho:2019, director:"Subiela"},
      {id:2, titulo:"Star Wars", anho:2018, director:"Spielberg"},
      {id:3, titulo:"Volver al futuro", anho:2017, director:"Juan Perez"},
      {id:4, titulo:"Gladiador", anho:2016, director:"Juan Perez"},
      {id:5, titulo:"Watchmen", anho:2015, director:"Zach Snyder"},
    ]
  }
  public getPeliculaById(ID:Number):Pelicula{
    return null;
  }
  public agregar(p:Pelicula):Number{
    return null;
  }
  public modificar(p:Pelicula):Number{
    return null;
  }
  public eliminar (p:Pelicula):Number{
    return null;
  }

  constructor() { }
}
