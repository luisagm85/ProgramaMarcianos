import { Injectable } from '@angular/core';
import { Revision } from '../../Classes/Revision';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import swal from 'sweetalert';
import { URL_SERVICIOS } from 'src/app/config/config';
@Injectable({
  providedIn: 'root'
})
export class RevisionService {
  revisiones: Revision[] = [];
  constructor(public http: HttpClient) { }

  crearRevision( revisiones: Revision ) {
    let url = URL_SERVICIOS + '/revision';
      return this.http.post(url, revisiones)
            .pipe(map((res: any) => {
               swal('Revision creada', revisiones.nombre, 'success');
               return res.revision;
               }));
  }
}
