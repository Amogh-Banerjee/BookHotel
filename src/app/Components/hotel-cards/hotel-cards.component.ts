import { Component, OnInit } from '@angular/core';
import { HotelCard } from 'src/Models/HotelCardModel';
import { HotelDetailsService } from 'src/Services/hotel-details.service';

@Component({
  selector: 'app-hotel-cards',
  templateUrl: './hotel-cards.component.html',
  styleUrls: ['./hotel-cards.component.css']
})
export class HotelCardsComponent implements OnInit {

  // Create an array of hotel card objects
  hotelcards: HotelCard[] = [];

  constructor(private hoteldetailsservice: HotelDetailsService) { }

  ngOnInit(): void {
    this.gethotels();
  }

  gethotels(): void {
    this.hoteldetailsservice.getAllHotels().subscribe(data => {
      this.hotelcards = data;
      this.setImagePaths();
      this.setTaxes();

      console.log(this.hotelcards);
    });
  }

  setImagePaths(): void{
    // Setting the image paths after data is fetched
    for (let index = 0; index < this.hotelcards.length; index++) {
      this.hotelcards[index].imgpath = `../../../assets/HotelImages/Hotel${index + 1}.jpg`;      
    }
  }

  setTaxes(): void{
    for (let index = 0; index < this.hotelcards.length; index++) {
      let price = this.hotelcards[index].price;
      if (price <= 1000) {
        this.hotelcards[index].taxes = 0;
      }
      else if(price > 1000 && price <= 7500){
        this.hotelcards[index].taxes = Math.round(0.12 * price);
      }
      else{
        this.hotelcards[index].taxes = Math.round(0.15 * price);
      }
      
    }
  }

}
