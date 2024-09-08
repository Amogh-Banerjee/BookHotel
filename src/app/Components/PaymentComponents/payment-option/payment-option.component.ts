import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from 'src/app/guards/can-deactivate.guard';
import { DisplayService } from 'src/Services/display.service';

@Component({
  selector: 'app-payment-option',
  templateUrl: './payment-option.component.html',
  styleUrls: ['./payment-option.component.css']
})
export class PaymentOptionComponent implements OnInit  {


  constructor(public displayService: DisplayService, private router: Router) { }


  ngOnInit(): void {
  }

  selectedOption: string = '';
  showPayLaterModal: boolean = false;
  showPayNowModal: boolean = false;

  onContinue(){
    this.closeModal(); // Close any open modal before opening another one

    if (this.selectedOption === 'payLater') {
      this.showPayLaterModal = true;
      this.displayService.paymentOption = this.selectedOption;
    } else if (this.selectedOption === 'payNow') {
      this.showPayNowModal = true;
      this.displayService.paymentOption = this.selectedOption;
    } else {
      alert('Please select a payment option');
    }
  }

  closeModal() {
    this.showPayLaterModal = false;
    this.showPayNowModal = false;
  }


}
