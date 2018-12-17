import { Component, OnInit } from '@angular/core';
import { Viaje } from '../Classes/Viaje';
import { NaveNodriza } from '../Classes/NaveNodriza';
import { Aeronave } from '../Classes/Aeronave';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.styl']
})
export class ViajeComponent {

  model: Viaje = new Viaje();
  naves: Aeronave[];

  constructor(private dataService: DataService){
    this.naves = this.dataService.getaeronaves();
  }

  }