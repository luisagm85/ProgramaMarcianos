import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Aeronave } from '../Classes/Aeronave';
import { NaveNodriza } from '../Classes/NaveNodriza';
import { DataService } from '../services/data.service';
import { Pasajero } from '../Classes/Pasajero';

@Component({
  selector: 'app-aeronave',
  templateUrl: './aeronave.component.html',
  styleUrls: ['./aeronave.component.styl']
})

export class AeronaveComponent{
  model: Aeronave = new Aeronave();
  //@Output onsubmit = new EventEmitter<any>();

  navesOrigen: NaveNodriza[];
  navesDestino: NaveNodriza[];


  constructor(private dataService: DataService){

    this.navesDestino = this.dataService.getnavesNodrizas();
    this.navesOrigen = this.dataService.getnavesNodrizas();

  }

}

