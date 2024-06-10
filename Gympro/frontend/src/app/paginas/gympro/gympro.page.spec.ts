import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GymproPage } from './gympro.page';

describe('GymproPage', () => {
  let component: GymproPage;
  let fixture: ComponentFixture<GymproPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GymproPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
