import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pasajero } from '../../Classes/Pasajero';
import { map } from 'rxjs/operators';
import swal from 'sweetalert';
import { URL_SERVICIOS } from 'src/app/config/config';
@Injectable({
  providedIn: 'root'
})
export class PasajeroServiceService {
pasajero: Pasajero[] = [];
  constructor(public http: HttpClient) { }

  cargarPasajero() {
    let url = URL_SERVICIOS + '/pasajero';
       return this.http.get(url)
            .pipe(map((resp: any) => {
              return resp.pasajeros;
            }));
    }

  crearPasajero( pasajero: Pasajero ) {
    let url = URL_SERVICIOS + '/pasajero';
      return this.http.post(url, pasajero)
            .pipe(map((res: any) => {
               swal('Pasajero creado', pasajero.nombre, 'success');
               return res.pasajero;
               }));
  }

  actualizarPasajero(pasajero: Pasajero ) {
    let url = URL_SERVICIOS + '/pasajero/' + pasajero._id;
       return this.http.put(url, pasajero)
       .pipe(map((res: any) => {
          swal('Pasajero actualizado', pasajero.nombre, 'success');
          return res.pasajero;
          }));
 }


  borrarPasajero(id: string) {
    let url = URL_SERVICIOS + '/pasajero/' + id;
    return this.http.delete(url)
       .pipe(map(() => {
       swal('Pasajero borrada', 'El Pasajero fue eliminada correctamente', 'success');
       return true;
       }));
  }
}
