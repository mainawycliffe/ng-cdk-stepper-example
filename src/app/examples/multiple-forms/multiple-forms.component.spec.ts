import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleFormsComponent } from './multiple-forms.component';

describe('MultipleFormsComponent', () => {
  let component: MultipleFormsComponent;
  let fixture: ComponentFixture<MultipleFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
