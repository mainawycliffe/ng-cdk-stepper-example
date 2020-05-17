import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFormComponent } from './single-form.component';

describe('SingleFormComponent', () => {
  let component: SingleFormComponent;
  let fixture: ComponentFixture<SingleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
