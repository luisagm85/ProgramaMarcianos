import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeronaveComponent } from './aeronave.component';

describe('AeronaveComponent', () => {
  let component: AeronaveComponent;
  let fixture: ComponentFixture<AeronaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeronaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeronaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
