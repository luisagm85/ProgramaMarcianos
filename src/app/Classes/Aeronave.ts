import { Component, OnInit } from '@angular/core';
import { NaveNodriza } from './NaveNodriza';
import { Pasajero } from './Pasajero';

export class Aeronave {



  constructor(public nombre: string,
    public max_pas?: number,
    public nodriza?: NaveNodriza,
    public _id?: string) {

               }

  // public setOrigen(Origen) {
  //   return Origen;
  // }

  // subirPasajero(p: Pasajero) {
  //   if (this.pasajerosabordo.length < this.max_pas) {
  //     this.pasajerosabordo.push(p);
  //   }
  // }

  // bajarPasajero(p: Pasajero) {
  //   // tslint:disable-next-line:prefer-const
  //   let inx = this.pasajerosabordo.indexOf(p);
  //   this.pasajerosabordo.splice(inx, 1);
  // }

}
