import { Component } from '@angular/core';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  private isLoggedin: boolean;
    private firstname:string;

    constructor(public loginService: LoginService) {
        this.isLoggedin = loginService.isLoggedin();
        this.firstname = JSON.parse(localStorage.getItem("username"));
    }

    logout(){
        this.loginService.logout();
    }
}
