import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaveNodrizaComponent } from './nave-nodriza.component';

describe('NaveNodrizaComponent', () => {
  let component: NaveNodrizaComponent;
  let fixture: ComponentFixture<NaveNodrizaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaveNodrizaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaveNodrizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
