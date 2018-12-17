import { Component, OnInit } from '@angular/core';
import { NaveNodriza } from './NaveNodriza';
import { Pasajero } from './Pasajero';

export class Viaje{

  public ID: number;
  public Nave: NaveNodriza;
  public FechaSalida: Date;
  public FechaLlegada: Date;
  //public HoraLLegada: Time;
  //public Horasalida: Time;
  public Estado: string;

  constructor(){

  }

}