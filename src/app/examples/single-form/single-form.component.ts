import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
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
  selector: 'app-single-form',
  templateUrl: './single-form.component.html',
  styleUrls: ['./single-form.component.scss'],
})
export class SingleFormComponent implements OnInit {
  @Input()
  isLinear = true;

  @Input()
  isEditable = true;

  frmValues: object = {};

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

  frm = this.fb.group({
    steps: this.fb.array([this.frmDetails, this.frmAddress, this.frmPayment]),
  });

  get formArray(): AbstractControl {
    return this.frm.get('steps');
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  submit(): void {
    console.log(this.frm.value);
    this.frmValues = this.frm.value;
  }
}
