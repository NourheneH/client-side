import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/users';
import { LoginService } from '../services/login.service';

@Component({
    selector : 'login',
  moduleId: 'module.id',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

user: User;
    constructor(public router: Router, public loginService: LoginService) {
        this.user = new User();
    }

    login() {
        this.loginService.login(this.user);
    }



}