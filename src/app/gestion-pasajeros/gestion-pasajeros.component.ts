import { Component, OnInit } from '@angular/core';
import { Viaje } from '../Classes/Viaje';
import { Pasajero } from '../Classes/Pasajero';
import { DataService } from '../services/data.service';
import { Aeronave } from '../Classes/Aeronave';

@Component({
  selector: 'app-gestion-pasajeros',
  templateUrl: './gestion-pasajeros.component.html',
  styleUrls: ['./gestion-pasajeros.component.styl']
})
export class GestionPasajerosComponent implements OnInit {

  aeronaveActual: Aeronave = new Aeronave();
  pasajeroActual: Pasajero = new Pasajero();

  pasajerosExistentes: Pasajero[];
  aeronavesDisponibles: Aeronave[];

  constructor(private dataService: DataService) {
    
    this.pasajerosExistentes = this.dataService.getpasajeros();
    this.aeronavesDisponibles = this.dataService.getaeronaves();

  }

  ngOnInit() {
  }

}
