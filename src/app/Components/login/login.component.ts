import { Component, ElementRef, ViewChild } from '@angular/core';

declare var bootstrap: any; // Declare bootstrap as global

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  



  mobileNumber:string='';
  
onSubmit(){
  if(this.isValidMobileNumber(this.mobileNumber)){

 
  console.log("Mobile Number entered successfully.",this.mobileNumber);

}
else{
  console.log('Invalid mobile number:',this.mobileNumber);
}
}
isValidMobileNumber(mobile:string):boolean {
  const mobilePattern = /^[6-9]\d{9}$/;
  return mobilePattern.test(mobile);
}
  // constructor() { }

  // ngOnInit(): void {
  // }

}
