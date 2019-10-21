import { Pelicula } from '../model/pelicula';

export abstract class PeliculaServiceBase{
    public abstract getPeliculas();
    public abstract getPeliculaById(ID:Number):Pelicula;
    public abstract agregar(p:Pelicula):Number;
    public abstract modificar(p:Pelicula):Number;
    public abstract eliminar (p:Pelicula):Number;
}
