import { Component, OnInit } from '@angular/core';
import { NaveNodriza } from './NaveNodriza';
import { Pasajero } from './Pasajero';

export class Aeronave {

  public _id: number;
  public nombre: string;
  public maxmarcianos: number;
  public origen: NaveNodriza;
  public destino: NaveNodriza;
  public pasajerosabordo: Pasajero[];

  constructor() {

               }

  public setOrigen(Origen) {
    return Origen;
  }

  subirPasajero(p: Pasajero) {
    if (this.pasajerosabordo.length < this.maxmarcianos) {
      this.pasajerosabordo.push(p);
    }
  }

  bajarPasajero(p: Pasajero) {
    // tslint:disable-next-line:prefer-const
    let inx = this.pasajerosabordo.indexOf(p);
    this.pasajerosabordo.splice(inx, 1);
  }

}
