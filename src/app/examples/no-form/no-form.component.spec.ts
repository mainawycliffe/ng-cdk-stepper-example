import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFormComponent } from './no-form.component';

describe('NoFormComponent', () => {
  let component: NoFormComponent;
  let fixture: ComponentFixture<NoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
