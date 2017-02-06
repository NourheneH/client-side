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
        
      /*  this.loginService.login(this.user).subscribe(
          res => {
               console.log('isloggedin');
               if ( res == true) {
                   console.log('yes ');
               }
          }
        );
        */
        this.loginService.login(this.user);
        console.log('here');
        this.router.navigate(['home']);
        
    
    }

/**data => {
                if(data) {
                    console.log('here', data);
                     this.router.navigate(['home']);
                }
            } */

}
