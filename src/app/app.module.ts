import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CdkStepperModule } from '@angular/cdk/stepper';

import { AppComponent } from './app.component';
import { MyStepperComponent } from './stepper/my-stepper/my-stepper.component';

@NgModule({
  declarations: [AppComponent, MyStepperComponent],
  imports: [BrowserModule, CdkStepperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
