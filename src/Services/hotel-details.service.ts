import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HotelCard } from 'src/Models/HotelCardModel';

@Injectable({
  providedIn: 'root'
})
export class HotelDetailsService {

  constructor(private http: HttpClient) { }

  hotelreq = "https://localhost:7061/api/HotelDetails";

  //Method to get the list of all hotels from the API.
  getAllHotels(): Observable<HotelCard[]> {
    return this.http.get<HotelCard[]>(this.hotelreq);
  }
}
