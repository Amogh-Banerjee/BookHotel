import { Component, ElementRef, ViewChild } from '@angular/core';
import { DisplayService } from 'src/Services/display.service';
import { UserService } from 'src/Services/user.service';

declare var bootstrap: any; // Declare bootstrap as global

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  mobileNumber: string = '';

  constructor(private userService: UserService, public displayService: DisplayService) { }

  maxId= 0;
  ngOnInit(): void {
    this.userService.getMaxId().subscribe({
      next: (maxId: number) => {
        this.maxId = maxId;
        console.log('Max _id:', this.maxId);
      },
      error: (error) => {
        console.error('Error fetching max _id:', error);
      }
    });
  }

  // Sign up

  username = '';
  password_hash = '';

  showSignupSuccessAlert: boolean = false;

  signUp() {
    this.userService.signUp(this.maxId+1, this.mobileNumber, this.username, this.password_hash).subscribe({

      next: response => {
        console.log('Sign up successful', response);
        this.showSignupSuccessAlert = true;  // Show the alert on success
        this.maxId++;
      },
      error: error => {
        console.error('Error signing up', error);
      },
      complete: () => {
        console.log('Sign up request completed');
      }
    });
  }

  closeSignupAlert() {
    this.showSignupSuccessAlert = false;  // Close the alert when user clicks close
  }

  // Log in

  login = { mobileNumber: '', password: '' };

  showLoginSuccessAlert: boolean = false;

  onLogin() {
    this.userService.login(this.mobileNumber, this.login.password).subscribe({
      next: response => {
        console.log('Login successful', response);
        this.showLoginSuccessAlert = true;  // Show the alert on success
        this.displayService.isLoggedIn = true;
        this.fetchUsername();
      },
      error: error => {
        console.error('Error logging in', error);
      },
      complete: () => {
        console.log('Login request completed');
      }
    });
  }

  closeLoginAlert() {
    this.showLoginSuccessAlert = false;  // Close the alert when user clicks close
  }

  fetchUsername() {
    if (this.mobileNumber) {
      this.userService.getUsernameByMobileNumber(this.mobileNumber).subscribe(
        response => {
          this.displayService.currentUser = response.username;
          console.log('current user is: '+this.displayService.currentUser);
        },
        error => {
          console.error('Error fetching username', error);
        }
      );
    }
  }

}
