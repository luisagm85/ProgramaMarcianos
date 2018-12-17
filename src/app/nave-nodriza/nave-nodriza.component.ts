import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { NaveNodriza } from '../Classes/NaveNodriza';

@Component({
  selector: 'app-nave-nodriza',
  templateUrl: './nave-nodriza.component.html',
  styleUrls: ['./nave-nodriza.component.styl']
})
export class NaveNodrizaComponent {
  
  model: NaveNodriza = new NaveNodriza();
  @Output() onsubmit = new EventEmitter<any>();

  public submit(){
    this.onsubmit.emit(this.model);
    console.log(this.model);
  }



}
