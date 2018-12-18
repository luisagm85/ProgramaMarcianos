import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aeronave } from '../../Classes/Aeronave';
import { map } from 'rxjs/operators';
import swal from 'sweetalert';
import { URL_SERVICIOS } from 'src/app/config/config';
@Injectable({
  providedIn: 'root'
})
export class AeronaveService {
  aeronave: Aeronave[] = [];
  constructor(public http: HttpClient) {
    console.log('servicio de la Aeronave  listo');
  }

  cargarAeronaves() {
    let url = URL_SERVICIOS + '/naves';
       return this.http.get(url)
            .pipe(map((resp: any) => {
              return resp.naves;
            }));
    }

  crearAeronave( aeronave: Aeronave ) {
    let url = URL_SERVICIOS + '/naves';
      return this.http.post(url, aeronave)
            .pipe(map((res: any) => {
               swal('Aeronave creada', aeronave.nombre, 'success');
               return res.naves;
               }));
  }

  actualizarAeronave(aeronave: Aeronave ) {
    let url = URL_SERVICIOS + '/naves/' + aeronave._id;
       return this.http.put(url, aeronave)
       .pipe(map((res: any) => {
          swal('Nave nodriza Actualizada', aeronave.nombre, 'success');
          return res.naves;
          }));
 }


  borrarAeronaves(id: string) {
    let url = URL_SERVICIOS + '/naves/' + id;
    return this.http.delete(url)
       .pipe(map(() => {
       swal('Aeronave borrada', 'La Aeronave fue eliminada correctamente', 'success');
       return true;
       }));
  }



}
