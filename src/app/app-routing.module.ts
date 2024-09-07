import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HotelCardsComponent } from './Components/hotel-cards/hotel-cards.component';

const routes: Routes = [
  {path: 'searchresults', component: HotelCardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
