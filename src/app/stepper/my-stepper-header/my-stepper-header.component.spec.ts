import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStepperHeaderComponent } from './my-stepper-header.component';

describe('MyStepperHeaderComponent', () => {
  let component: MyStepperHeaderComponent;
  let fixture: ComponentFixture<MyStepperHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStepperHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStepperHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
