import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeanFormComponent } from './bean-form.component';

describe('BeanFormComponent', () => {
  let component: BeanFormComponent;
  let fixture: ComponentFixture<BeanFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeanFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
