import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() {
    
    // Initialize minDate and checkInDate
    const today = new Date().toISOString().split('T')[0];
    this.minDate = today;
    this.checkInDate = today; // or set to a default value
  }

  ngOnInit(): void {
  }

  // Login:

  
  // Destination:

  destination: string = '';
  showDropdown: boolean = false;

  cities: string[] = [
    'Amritsar',
    'Mumbai',
    'Bengaluru',
    'Chennai',
    'Kochi',
    'Delhi',
    'Visakhapatnam',
    'Hyderabad',
    'Kolkata'
  ];

  filteredCities: string[] = this.cities;

  filterDestinations(): void {
    const inputValue = this.destination.toLowerCase();
    this.filteredCities = this.cities.filter(city => city.toLowerCase().includes(inputValue));
    this.showDropdown = true;
  }

  selectDestination(city: string): void {
    this.destination = city;
    this.showDropdown = false;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event): void {
    const target = event.target as HTMLElement;
    const clickedInside = target.closest('#citydropdown');
    if (!clickedInside) {
      this.showDropdown = false;
    }
  }

  // Check in and check out:

  minDate: string;
  checkInDate: string;
  checkOutDate: string = '';

  onCheckInDateChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.checkInDate = input.value;

    // Ensure check-out date is after check-in date
    if (this.checkOutDate && this.checkOutDate <= this.checkInDate) {
      this.checkOutDate = this.checkInDate;
    }
  }

  preventTyping(event: KeyboardEvent) {
    event.preventDefault();
  }
  
  // Rooms and guests:

  rooms: number = 1;
  adults: number = 2;
  children: number = 0;

  get totalGuests(): number {
    return this.adults + this.children;
  }

  increment(type: 'rooms' | 'adults' | 'children', event: Event): void {
    event.stopPropagation();
    if (type === 'rooms') {
      this.rooms++;
    } else if (type === 'adults') {
      this.adults++;
    } else if (type === 'children') {
      this.children++;
    }
  }

  decrement(type: 'rooms' | 'adults' | 'children', event: Event): void {
    event.stopPropagation();
    if (type === 'rooms' && this.rooms > 1) {
      this.rooms--;
    } else if (type === 'adults' && this.adults > 1) {
      this.adults--;
    } else if (type === 'children' && this.children > 0) {
      this.children--;
    }
  }


}
