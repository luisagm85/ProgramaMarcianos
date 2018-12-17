import { Component, OnInit } from '@angular/core';
import { NaveNodriza } from './NaveNodriza';
import { Pasajero } from './Pasajero';

export class Aeronave {

  public ID: number;
  public Nombre: string;
  public MaxMarcianos: number;
  public Origen: NaveNodriza;
  public Destino: NaveNodriza;
  public PasajerosABordo: Pasajero[];

  constructor() {

               }

  public setOrigen(Origen){
    return Origen;
  }

  subirPasajero(p: Pasajero){
    if(this.PasajerosABordo.length < this.MaxMarcianos)
    {
      this.PasajerosABordo.push(p);
    }
    
  }

  bajarPasajero(p: Pasajero){
    let inx = this.PasajerosABordo.indexOf(p);
    this.PasajerosABordo.splice(inx,1);
  }

}