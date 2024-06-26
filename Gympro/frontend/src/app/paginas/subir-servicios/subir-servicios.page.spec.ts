import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubirServiciosPage } from './subir-servicios.page';

describe('SubirServiciosPage', () => {
  let component: SubirServiciosPage;
  let fixture: ComponentFixture<SubirServiciosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirServiciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
