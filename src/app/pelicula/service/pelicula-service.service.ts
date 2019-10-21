import { Injectable } from '@angular/core';
import {PeliculaServiceBase} from "./pelicula-service-base";
import {Pelicula} from "../model/pelicula";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  peliculas:Pelicula[] = [
    {id:1, titulo:"Interstella", anho:2017, director:"Christopher Nolan"},
    {id:2, titulo:"Odisea del espacio", anho:1968, director:"Stanley Kubrick"},
    {id:3, titulo:"El jajas", anho:2019, director:"Todd Phillips"},
    {id:5, titulo:"Los vengadores", anho:2015, director:"El ruso"},
  ];

  public getPeliculas(){
    return this._http.get("http://jsonplaceholder.typicode.com/todos/");
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

  constructor(private _http:HttpClient) { }

}
