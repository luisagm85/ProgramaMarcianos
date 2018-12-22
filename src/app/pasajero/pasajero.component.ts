import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Pasajero} from '../Classes/Pasajero';
import { Aeronave } from '../Classes/Aeronave';
import { AeronaveService } from '../services/Aeronave/aeronave.service';
import { PasajeroServiceService } from '../services/Pasajero/pasajero-service.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
declare var swal: any;
@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.component.html',
  styleUrls: ['./pasajero.component.styl']
})

export class PasajeroComponent {

  pasajero: Pasajero[] = [];
  aeronave: Aeronave[] = [];
  formpasajero = new Pasajero('');

  constructor(public _aeronaveService: AeronaveService, public _pasajeroService: PasajeroServiceService) {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {

    this.cargarPasajero();
    this.cargaraeronaves();

  }

  // Get de Aeronaves
  cargaraeronaves() {
    this._aeronaveService.cargarAeronaves()
     .subscribe(naves => this.aeronave = naves);
  }


  // CRUD Pasajero
  crearPasajero(f: NgForm) {

    if (f.invalid) {
      return;
    }
    this._pasajeroService.crearPasajero(this.formpasajero)
                  .subscribe(formpasajero => {
                      this.cargarPasajero();
                  });

  }

  cargarPasajero() {
    this._pasajeroService.cargarPasajero()
    .subscribe(pasajeros => this.pasajero = pasajeros );

  }

  // actualizarPasajero( g: NgForm) {

  //   swal({
  //     title: '¿Estas seguro?',
  //     text: 'Esta a punto de actualizar?',
  //     icon: 'info',
  //     buttons: true,
  //     dangerMode: true,
  //   })
  //   .then((actualizar) => {
  //       console.log(actualizar);
  //     if (actualizar) {
  //       this._aeronaveService.actualizarAeronave( this.formnave1)
  //               .subscribe( actualizado => {
  //                   this.cargarnavesnodrizas();
  //               });
  //     }

  //   });
  // }

  borrarPasajero( pasajero: Pasajero) {
    swal({
      title: '¿Estas seguro?',
      text: 'Esta a punto de borrar a ' + pasajero.nombre,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then((borrar) => {
      if (borrar) {
        this._pasajeroService.borrarPasajero(pasajero._id )
                .subscribe( borrado => {
                    this.cargarPasajero();
                });
      }

    });
  }

}

