import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from 'src/app/guards/can-deactivate.guard';
import { DisplayService } from 'src/Services/display.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit  {

  fname = '';
  lname = '';
  email = '';

  constructor(public displayService: DisplayService, private router: Router){}
  ngOnInit(): void {
    this.displayService.showNavBar = false;
  }

  onSubmit(){
    this.displayService.currentEmail = this.email;
  }

  
}
