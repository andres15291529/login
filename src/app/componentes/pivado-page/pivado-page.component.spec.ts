import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PivadoPageComponent } from './pivado-page.component';

describe('PivadoPageComponent', () => {
  let component: PivadoPageComponent;
  let fixture: ComponentFixture<PivadoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PivadoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PivadoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
