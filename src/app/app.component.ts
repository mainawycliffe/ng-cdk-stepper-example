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
  faPerson = faUser;
  faAddressBook = faAddressBook;
  faCreditCard = faCreditCard;

  frmDetails = this.fb.group({
    firstName: ['First Name', Validators.compose([Validators.required])],
    lastName: ['Last Name', Validators.compose([Validators.required])],
    email: [
      'johndoe@example.com',
      Validators.compose([Validators.required, Validators.email]),
    ],
  });

  constructor(private fb: FormBuilder) {}

  frmSubmit(frm: FormGroup) {
    console.log(frm);
  }
}
