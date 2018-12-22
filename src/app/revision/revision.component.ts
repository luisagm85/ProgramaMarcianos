import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import {Revision} from '../Classes/Revision';
import { Viaje } from '../Classes/Viaje';
import { DataService } from '../services/data.service';
import { Aeronave } from '../Classes/Aeronave';

@Component({
  selector: 'app-revision',
  templateUrl: './revision.component.html',
  styleUrls: ['./revision.component.styl']
})

export class RevisionComponent {


  aeronaves: Aeronave[];

  constructor(private dataService: DataService) {

    this.aeronaves = this.dataService.getaeronaves();
  }


}
