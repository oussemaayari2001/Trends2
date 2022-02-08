/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModifEmpComponent } from './ModifEmp.component';

describe('ModifEmpComponent', () => {
  let component: ModifEmpComponent;
  let fixture: ComponentFixture<ModifEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
