import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaveNodrizaComponent } from './nave-nodriza/nave-nodriza.component';
import { AeronaveComponent } from './aeronave/aeronave.component';
import { PasajeroComponent } from './pasajero/pasajero.component';
import { ViajeComponent } from './viaje/viaje.component';
import { RevisionComponent } from './revision/revision.component';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { MenuComponent } from './menu/menu.component';
import { GestionPasajerosComponent } from './gestion-pasajeros/gestion-pasajeros.component';
import { NodrizaService } from './services/nave-nodriza/nodriza.service';
import { AeronaveService } from './services/Aeronave/aeronave.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AeronaveditComponent } from './aeronave/aeronavedit.component';
import { PasajeroServiceService } from './services/Pasajero/pasajero-service.service';
import { RevisionService } from './services/Revision/revision.service';






const appRoutes: Routes = [
  {path: 'newNaveNodriza', component: NaveNodrizaComponent},
  {path: 'newAeronave', component: AeronaveComponent},
  {path: 'newPasajero', component: PasajeroComponent},
  {path: 'newViaje', component: ViajeComponent},
  {path: 'newRevision', component: RevisionComponent},
  {path: 'newGestion', component: GestionPasajerosComponent},
  {path: 'editAeronave', component: AeronaveditComponent},
  {path: '', redirectTo: 'newNaveNodriza', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NaveNodrizaComponent,
    AeronaveComponent,
    PasajeroComponent,
    ViajeComponent,
    RevisionComponent,
    MenuComponent,
    GestionPasajerosComponent,
    AeronaveditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    AeronaveService,
    PasajeroServiceService,
    RevisionService,
    NodrizaService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
