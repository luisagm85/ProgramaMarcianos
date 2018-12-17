import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPasajerosComponent } from './gestion-pasajeros.component';

describe('GestionPasajerosComponent', () => {
  let component: GestionPasajerosComponent;
  let fixture: ComponentFixture<GestionPasajerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionPasajerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionPasajerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
