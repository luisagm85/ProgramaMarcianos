import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Aeronave } from '../Classes/Aeronave';
import { NaveNodriza } from '../Classes/NaveNodriza';
import { DataService } from '../services/data.service';
import { Pasajero } from '../Classes/Pasajero';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { AeronaveService } from '../services/Aeronave/aeronave.service';
import { NodrizaService } from '../services/nave-nodriza/nodriza.service';
declare var swal: any;

@Component({
  selector: 'app-aeronave',
  templateUrl: './aeronave.component.html'
})

export class AeronaveComponent {

  aeronave: Aeronave[] = [];
  nodriza: NaveNodriza[] = [];
  formnave = new Aeronave('');
  formnave1 = new Aeronave('');
  forma: FormGroup;



  constructor(public _aeronaveService: AeronaveService, public _nodrizaService: NodrizaService) {
  }


  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {
    this.cargarAeronave();
    this.cargarnavesnodrizas();

  }

  // Get de Naves Nodrizas
  cargarnavesnodrizas() {
    this._nodrizaService.cargarnavesnodrizas()
                .subscribe((resp: any) => {
                  this.nodriza = resp.nodrizas;
                  console.log(this.nodriza);
                });
  }


  // CRUD Aeronave
  crearAeronave(f: NgForm) {

    if (f.invalid) {
      return;
    }
    this._aeronaveService.crearAeronave(this.formnave)
                  .subscribe(formnave => {
                      this.cargarAeronave();
                  });

  }

  cargarAeronave() {
    this._aeronaveService.cargarAeronaves()
    .subscribe(naves => this.aeronave = naves);

  }

  actualizarAeronave( g: NgForm) {

    swal({
      title: '¿Estas seguro?',
      text: 'Esta a punto de actualizar?',
      icon: 'info',
      buttons: true,
      dangerMode: true,
    })
    .then((actualizar) => {
        console.log(actualizar);
      if (actualizar) {
        this._aeronaveService.actualizarAeronave( this.formnave1)
                .subscribe( actualizado => {
                    this.cargarnavesnodrizas();
                });
      }

    });
  }

  borrarNodriza( aeronave: Aeronave) {
    console.log(aeronave);
    swal({
      title: '¿Estas seguro?',
      text: 'Esta a punto de borrar a ' + aeronave.nombre,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then((borrar) => {
        console.log(borrar);
      if (borrar) {
        this._aeronaveService.borrarAeronaves(aeronave._id )
                .subscribe( borrado => {
                  console.log(borrado);
                    this.cargarAeronave();
                });
      }

    });
  }


}

