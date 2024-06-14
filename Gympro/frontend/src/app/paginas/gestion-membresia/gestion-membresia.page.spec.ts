import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionMembresiaPage } from './gestion-membresia.page';

describe('GestionMembresiaPage', () => {
  let component: GestionMembresiaPage;
  let fixture: ComponentFixture<GestionMembresiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionMembresiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
