import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {
  faUser,
  faAddressBook,
  faCreditCard,
  faChevronLeft,
  faChevronRight,
  faSave,
  faBan,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-multiple-forms',
  templateUrl: './multiple-forms.component.html',
  styleUrls: ['./multiple-forms.component.scss'],
})
export class MultipleFormsComponent implements OnInit {
  @Input()
  isLinear = true;

  @Input()
  isEditable = true;

  faPerson = faUser;
  faAddressBook = faAddressBook;
  faCreditCard = faCreditCard;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faSave = faSave;

  faBan = faBan;
  frmDetails = this.fb.group({
    firstName: ['First Name', Validators.compose([Validators.required])],
    lastName: ['Last Name', Validators.compose([Validators.required])],
    phone: [null], // optional
    email: [
      'johndoe@example.com',
      Validators.compose([Validators.required, Validators.email]),
    ],
  });

  frmAddress = this.fb.group({
    addressOne: [null, Validators.compose([Validators.required])],
    addressTwo: [null], // optional
    city: [null, Validators.compose([Validators.required])],
    county: [null, Validators.compose([Validators.required])],
    country: [null, Validators.compose([Validators.required])],
  });

  frmPayment = this.fb.group({
    creditCardNo: [
      '4111 1111 1111 1111',
      Validators.compose([Validators.required]),
    ],
    expiryDate: ['', Validators.compose([Validators.required])],
    cvvCode: ['', Validators.compose([Validators.required])],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  frmSubmit(frm: FormGroup) {
    console.log(frm);
  }
}
