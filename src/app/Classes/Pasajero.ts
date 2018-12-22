import { Component, OnInit } from '@angular/core';
import { Aeronave } from './Aeronave';

export class Pasajero {



    constructor(public nombre: string, public aeronave?: Aeronave,
      public _id?: string) {}

  }
