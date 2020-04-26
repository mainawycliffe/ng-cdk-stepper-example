import { Component, OnInit } from '@angular/core';
import { CdkStep, CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'app-my-stepper',
  templateUrl: './my-stepper.component.html',
  styleUrls: ['./my-stepper.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: MyStepperComponent }],
})
export class MyStepperComponent extends CdkStepper implements OnInit {
  // constructor() {
  //   super();
  // }

  ngOnInit(): void {}

  onClick(index: number): void {
    this.selectedIndex = index;
  }
}
