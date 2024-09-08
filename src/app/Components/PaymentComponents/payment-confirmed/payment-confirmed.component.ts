import { Component, OnInit } from '@angular/core';
import { HotelCard } from 'src/Models/HotelCardModel';
import { DisplayService } from 'src/Services/display.service';
import { HotelDetailsService } from 'src/Services/hotel-details.service';

@Component({
  selector: 'app-payment-confirmed',
  templateUrl: './payment-confirmed.component.html',
  styleUrls: ['./payment-confirmed.component.css']
})
export class PaymentConfirmedComponent implements OnInit {

  constructor(public displayService: DisplayService, private hotelDetailsService: HotelDetailsService) { }

  ngOnInit(): void {
    this.getCurrentHotel();
    this.showAmount();
  }

  bookingDate = new Date();

  currentHotel: HotelCard | undefined;

  getCurrentHotel() {
    this.currentHotel = this.hotelDetailsService.hotelcards.find(card => card._id === this.displayService.selectedHotelID);
  }

  showPaid = false;

  showAmount(){
    if (this.displayService.paymentOption === 'payNow') {
      this.showPaid = true;
    }
  }

}
