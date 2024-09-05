import { Component, ElementRef, ViewChild } from '@angular/core';

declare var bootstrap: any; // Declare bootstrap as global

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  mobileNumber: string = '';

  onSubmit(form: any) {
    if (form.valid) {
      // Proceed with form submission or further logic
      console.log('Mobile number is valid:', this.mobileNumber);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
