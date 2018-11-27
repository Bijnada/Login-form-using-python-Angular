import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Response } from 'selenium-webdriver/http';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})
export class AppComponent implements OnInit{
  register;
  constructor(private userService: UserService ) { }
  ngOnInit() {
    this.register = {
      username: '',
      password: '',
      email: ''
    };
  }
  registerUser() {
    this.userService.registerNewUser(this.register).subscribe(
      Response => {
        alert('User' + this.register.username + 'has been created!')
      },
      error => console.log('error', error)
    );

  }
}
