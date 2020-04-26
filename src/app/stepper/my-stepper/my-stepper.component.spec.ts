import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStepperComponent } from './my-stepper.component';

describe('MyStepperComponent', () => {
  let component: MyStepperComponent;
  let fixture: ComponentFixture<MyStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
