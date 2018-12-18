import { Injectable } from '@angular/core';
import { NaveNodriza } from '../../Classes/NaveNodriza';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import swal from 'sweetalert';
@Injectable({
  providedIn: 'root'
})
export class NodrizaService {

  constructor( public http: HttpClient) {
      console.log('servicio de la nave nodriza listo');
   }

   crearnavenodriza( nodriza: NaveNodriza) {

      let url = URL_SERVICIOS + '/nodriza';
      return this.http.post(url, nodriza)
            .pipe(map((res: any) => {
               swal('Nave nodriza creada', nodriza.nombre, 'success');
               return res.nodriza;
               }));
   }

   actualizarnavenodriza(nodriza: NaveNodriza, id: string ) {
      let url = URL_SERVICIOS + '/nodriza/' + id;
         return this.http.put(url, nodriza)
         .pipe(map((res: any) => {
            swal('Nave nodriza Actualizada', nodriza.nombre, 'success');
            return res.nodriza;
            }));
   }
   cargarnavesnodrizas() {
      let url = URL_SERVICIOS + '/nodriza';
         return this.http.get(url);
       }

   // buscarNaves(terminp: string) {
   // }

   borrarnavenodriza(id: string) {
      let url = URL_SERVICIOS + '/nodriza/' + id;
      return this.http.delete(url)
         .pipe(map(() => {
         swal('Nave nodriza borrada', 'La nave nodriza fue eliminada correctamente', 'success');
         return true;
         }));
   }
}

