import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { NaveNodriza } from '../Classes/NaveNodriza';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { NodrizaService } from '../services/nave-nodriza/nodriza.service';

declare var swal: any;
@Component({
  selector: 'app-nave-nodriza',
  templateUrl: './nave-nodriza.component.html',
  styleUrls: ['./nave-nodriza.component.styl']
})
export class NaveNodrizaComponent {

  nodrizas: NaveNodriza[] = [];
  forma: FormGroup;
  cargando: boolean = true;
  constructor(public _nodrizaService: NodrizaService) {

  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required)
    });
    this.cargarnavesnodrizas();
  }



  crearnavenodriza() {
    // tslint:disable-next-line:prefer-const
    let navenodriza = new NaveNodriza(
      this.forma.value.nombre
    );
    this._nodrizaService.crearnavenodriza(navenodriza)
          .subscribe(resp => {
              console.log(resp);
              this.cargarnavesnodrizas();
                        });

  }

  cargarnavesnodrizas() {

    this.cargando = true;
    this._nodrizaService.cargarnavesnodrizas()
                .subscribe((resp: any) => {
                  this.nodrizas = resp.nodrizas;
                  console.log(this.nodrizas);
                  this.cargando = false;
                });
  }

  // buscarusuario(termino: string) {
  //   console.log(termino);
  // }

  borrarNodriza( nodriza: NaveNodriza) {
    console.log(nodriza);
    swal({
      title: '¿Estas seguro?',
      text: 'Esta a punto de borrar a ' + nodriza.nombre,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then((borrar) => {
        console.log(borrar);
      if (borrar) {
        this._nodrizaService.borrarnavenodriza(nodriza._id )
                .subscribe( borrado => {
                  console.log(borrado);
                    this.cargarnavesnodrizas();
                });
      }

    });
  }



}
