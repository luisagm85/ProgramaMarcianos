import { Injectable } from '@angular/core';
import { NaveNodriza } from '../Classes/NaveNodriza';
import { Viaje } from '../Classes/Viaje';
import { Aeronave } from '../Classes/Aeronave';
import { Pasajero } from '../Classes/Pasajero';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  navesNodrizas: NaveNodriza[];
  viajes: Viaje[];
  naves: Aeronave[];
  passengers: Pasajero[];

  constructor() { }

  getnavesNodrizas(){
    return this.navesNodrizas;
  }

  getviajes(){
    return this.viajes;
  }

  getaeronaves(){
    return this.naves;
  }

  getpasajeros(){
    return this.passengers;
  }

}
