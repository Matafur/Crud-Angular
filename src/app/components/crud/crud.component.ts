import { Component, OnInit } from '@angular/core';
import { articulo } from './articulo-model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  titulo="Administración de productos"

  hayRegistros() {
    return this.articulos.length>0;              
  }

  art={
    codigo:0 ,
    descripcion:"",
    precio:0
  }

  articulos: articulo[] =[
    new articulo(1,'Manzana',2500),
    new articulo(2,'Pera',5555),
    new articulo(3,'Aguacate',5500),
    new articulo(4,'Arroz',3500),
    new articulo(5, 'Papaya',500),
  ]

  

  borrar(codigo:number) {
    for(let x=0;x<this.articulos.length;x++)
      if (this.articulos[x].codigo==codigo)
      {
        this.articulos.splice(x,1);
        return;
      }
  }

  agregar() {
    if (this.art.codigo==0) {
      alert('Debe ingresar un código de articulo distinto a cero');
      return;
    }
    for(let x=0;x<this.articulos.length;x++)
    if (this.articulos[x].codigo==this.art.codigo)
    {
      alert('ya existe un articulo con dicho codigo');
      return;
    }        
    this.articulos.push({codigo:this.art.codigo,
                         descripcion:this.art.descripcion,
                         precio:this.art.precio });
    this.art.codigo=0;
    this.art.descripcion="";	
    this.art.precio=0;    
  }

  seleccionar(art: { codigo: number; descripcion: string; precio: number; }) {
    this.art.codigo=art.codigo;
    this.art.descripcion=art.descripcion;
    this.art.precio=art.precio;
  }

  modificar() {
    for(let x=0;x<this.articulos.length;x++)
      if (this.articulos[x].codigo==this.art.codigo)
      {
        this.articulos[x].descripcion=this.art.descripcion;
        this.articulos[x].precio=this.art.precio;
        return;
      }        
    alert('No existe el código de articulo ingresado');
  }


  constructor() { }

  ngOnInit(): void {
  }

}
