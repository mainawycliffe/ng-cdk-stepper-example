import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyStepperComponent } from './stepper/my-stepper/my-stepper.component';
import { SingleFormComponent } from './examples/single-form/single-form.component';
import { MultipleFormsComponent } from './examples/multiple-forms/multiple-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    MyStepperComponent,
    SingleFormComponent,
    MultipleFormsComponent,
  ],
  imports: [
    BrowserModule,
    CdkStepperModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
