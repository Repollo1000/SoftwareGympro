import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubirMaquinasPage } from './subir-maquinas.page';

describe('SubirMaquinasPage', () => {
  let component: SubirMaquinasPage;
  let fixture: ComponentFixture<SubirMaquinasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirMaquinasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
