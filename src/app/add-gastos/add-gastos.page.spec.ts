import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddGastosPage } from './add-gastos.page';

describe('AddGastosPage', () => {
  let component: AddGastosPage;
  let fixture: ComponentFixture<AddGastosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGastosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
