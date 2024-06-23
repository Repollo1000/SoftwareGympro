import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateClasePage } from './create-clase.page';

describe('CreateClasePage', () => {
  let component: CreateClasePage;
  let fixture: ComponentFixture<CreateClasePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
