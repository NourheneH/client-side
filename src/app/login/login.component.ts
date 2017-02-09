import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/users';
import { LoginService } from '../services/login.service';


@Component({
    selector: 'login',
    moduleId: 'module.id',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    user: User;
    message : boolean;
   
    constructor(public router: Router, public loginService: LoginService) {
        this.user = new User();
     
    }

    login() {

        this.loginService.login(this.user).subscribe(
            // We're assuming the response will be an object
            // with the JWT on an id_token key
            data => {
                 if (data.token) {
                     localStorage.setItem('id_token', data.token);
                     localStorage.setItem('username', this.user.email);
                      this.router.navigate(['dashboard']);
                 }
                 else {
                     this.router.navigate(['']);
                     this.message = true;
                 }
                 });
                
                
            }

}
