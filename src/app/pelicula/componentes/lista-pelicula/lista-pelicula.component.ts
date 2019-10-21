import { Component, OnInit } from '@angular/core';
import {PeliculaServiceBase} from '../../service/pelicula-service-base';
import { Pelicula } from '../../model/pelicula';
import { HttpClientModule, HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-lista-pelicula',
  templateUrl: './lista-pelicula.component.html',
  styleUrls: ['./lista-pelicula.component.css']
})
export class ListaPeliculaComponent implements OnInit {

  private peliculas:Pelicula[];

  constructor(private _service:PeliculaServiceBase, private _http:HttpClient) {
    this.peliculas = [];
   }

  ngOnInit() {
    this._service.getPeliculas().subscribe(
      data => {
        for (var e of data)
        {
          var p = new Pelicula();
          p.titulo = e.title;
          p.director = "Directorazo";
          p.anho = 2000;
          this.peliculas.push(p);
        }
      }
    );
  }

}
