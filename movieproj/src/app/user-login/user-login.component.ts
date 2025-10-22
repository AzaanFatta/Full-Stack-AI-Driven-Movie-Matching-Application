import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { LoginuserService } from '../loginuser.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User = new User();
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private loginUserService: LoginuserService, private router: Router) {}

  ngOnInit(): void {}

  userLogin() {
    this.loginUserService.loginUser(this.user).subscribe(
      response => {
        if (response === 'success') {
          this.successMessage = "Login Successful";
          this.errorMessage = null;
          this.router.navigate(['/home']);
        } else {
          this.errorMessage = "Sorry, please enter the correct username or password";
          this.successMessage = null;
        }
      },
      error => {
        this.errorMessage = "An error occurred. Please try again.";
        this.successMessage = null;
      }
    );
  }
}
