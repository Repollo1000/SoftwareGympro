import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorporalPage } from './corporal.page';

describe('CorporalPage', () => {
  let component: CorporalPage;
  let fixture: ComponentFixture<CorporalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
