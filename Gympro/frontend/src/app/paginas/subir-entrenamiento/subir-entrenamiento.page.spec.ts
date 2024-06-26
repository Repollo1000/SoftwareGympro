import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubirEntrenamientoPage } from './subir-entrenamiento.page';

describe('SubirEntrenamientoPage', () => {
  let component: SubirEntrenamientoPage;
  let fixture: ComponentFixture<SubirEntrenamientoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirEntrenamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
