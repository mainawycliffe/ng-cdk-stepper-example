import { Component } from '@angular/core';
import {
  faUser,
  faAddressBook,
  faCreditCard,
} from '@fortawesome/free-solid-svg-icons';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isEditable = false;
  isLinear = true;

  constructor() {}
}
