import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import {Revision} from '../Classes/Revision';
import { Viaje } from '../Classes/Viaje';
import { DataService } from '../services/data.service';
import { Aeronave } from '../Classes/Aeronave';
import { AeronaveService } from '../services/Aeronave/aeronave.service';
import { PasajeroServiceService } from '../services/Pasajero/pasajero-service.service';
import { NgForm } from '@angular/forms';
import { RevisionService } from '../services/Revision/revision.service';

@Component({
  selector: 'app-revision',
  templateUrl: './revision.component.html',
  styleUrls: ['./revision.component.styl']
})

export class RevisionComponent {


  aeronaves: Aeronave[];
  formrevision = new Revision('');
  constructor(public _serviceAeronave: AeronaveService,
    public _pasajeroService: PasajeroServiceService, public _revisionService: RevisionService) {

  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.cargarAeronave();

  }

  // Get de Naves Aeronave
  cargarAeronave() {
    this._serviceAeronave.cargarAeronaves()
    .subscribe(naves => this.aeronaves = naves);

  }

  // CRUD Revision
  crearRevision(f: NgForm) {

    if (f.invalid) {
      return;
    }
    this._revisionService.crearRevision(this.formrevision)
                  .subscribe(formnave => {
                      this.cargarAeronave();
                  });

  }
}
