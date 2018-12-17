import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Pasajero} from '../Classes/Pasajero';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.component.html',
  styleUrls: ['./pasajero.component.styl']
})

export class PasajeroComponent{

  model: Pasajero = new Pasajero();
}

