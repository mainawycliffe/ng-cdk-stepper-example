import { Component, OnInit, Input } from '@angular/core';
import { CdkStep } from '@angular/cdk/stepper';

@Component({
  selector: 'app-my-stepper-header',
  templateUrl: './my-stepper-header.component.html',
  styleUrls: ['./my-stepper-header.component.scss'],
})
export class MyStepperHeaderComponent implements OnInit {
  @Input()
  step: CdkStep;

  constructor() {}

  ngOnInit(): void {}
}
