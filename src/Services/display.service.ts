import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  public homeClicked = true;
  public searchClicked = false;
  public cardBookNowClicked = false;

  public selectedHotelID = 0;

  public isLoggedIn = false;
  public currentUser = '';

  public showAboutUs = false;
  public showContactUs = false;
  public showSearchBar = true;

  constructor() { }
}
