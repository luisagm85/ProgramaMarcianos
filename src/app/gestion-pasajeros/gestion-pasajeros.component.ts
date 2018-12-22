import { Component, OnInit } from '@angular/core';
import { Viaje } from '../Classes/Viaje';
import { Pasajero } from '../Classes/Pasajero';
import { DataService } from '../services/data.service';
import { Aeronave } from '../Classes/Aeronave';
import { NaveNodriza } from '../Classes/NaveNodriza';
import { AeronaveService } from '../services/Aeronave/aeronave.service';
import { NodrizaService } from '../services/nave-nodriza/nodriza.service';
import { PasajeroServiceService } from '../services/Pasajero/pasajero-service.service';

@Component({
  selector: 'app-gestion-pasajeros',
  templateUrl: './gestion-pasajeros.component.html',
  styleUrls: ['./gestion-pasajeros.component.styl']
})
export class GestionPasajerosComponent implements OnInit {

  // aeronaveActual: Aeronave = new Aeronave();


  pasajeros: Pasajero[];
  aeronaves: Aeronave[];
  naveNodriza: NaveNodriza[];

  constructor(public _serviceAeronave: AeronaveService,
    public _nodrizaService: NodrizaService, public _pasajeroService: PasajeroServiceService) {

  }

  ngOnInit() {
    this.cargarAeronave();
    this.cargarPasajero();
    this.cargarnavesnodrizas();
  }

  // Get de Naves Nodrizas
  cargarnavesnodrizas() {
    this._nodrizaService.cargarnavesnodrizas()
                .subscribe((resp: any) => {
                  this.naveNodriza = resp.nodrizas;
                });
  }
// Get de Naves Aeronave
  cargarAeronave() {
    this._serviceAeronave.cargarAeronaves()
    .subscribe(naves => this.aeronaves = naves);

  }
  // Get de Naves Aeronave
  cargarPasajero() {
    this._pasajeroService.cargarPasajero()
    .subscribe(pasajeros => this.pasajeros = pasajeros);

  }

  // Actualizar Naves por viaje

  // Actualizar Pasajero por Subir o bajar
}
