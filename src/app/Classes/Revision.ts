import { Component, OnInit } from '@angular/core';

export class Revision {



    constructor(public nombre: string,
        public aeronave?: string, public fecha?: Date, public _id?: string) { }

}
