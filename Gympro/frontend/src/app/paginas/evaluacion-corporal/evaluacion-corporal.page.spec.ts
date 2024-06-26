import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EvaluacionCorporalPage } from './evaluacion-corporal.page';

describe('EvaluacionCorporalPage', () => {
  let component: EvaluacionCorporalPage;
  let fixture: ComponentFixture<EvaluacionCorporalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionCorporalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
