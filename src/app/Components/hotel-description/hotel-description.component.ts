import { Component, OnInit } from '@angular/core';
import { DisplayService } from 'src/Services/display.service';

@Component({
  selector: 'app-hotel-description',
  templateUrl: './hotel-description.component.html',
  styleUrls: ['./hotel-description.component.css']
})
export class HotelDescriptionComponent implements OnInit {

  constructor(public displayService: DisplayService) { }

  ngOnInit(): void {
  }

}
