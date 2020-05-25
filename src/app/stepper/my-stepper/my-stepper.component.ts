import { Component, OnInit, Input } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-stepper',
  templateUrl: './my-stepper.component.html',
  styleUrls: ['./my-stepper.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: MyStepperComponent }],
})
export class MyStepperComponent extends CdkStepper {
  @Input()
  activeClass = 'active';

  isNextButtonHidden() {
    return !(this.steps.length === this.selectedIndex + 1);
  }
}
