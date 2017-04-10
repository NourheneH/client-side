import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../_shared/models/users';
import { LoginService } from '../../_shared/services/login.service';


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
                     localStorage.setItem('email', this.user.email);
                     console.log('username', localStorage.getItem('email'));
                      //this.router.navigate(['/dashboard']);
                      this.router.navigateByUrl('/dashboard')
                 }
                 else {
                     this.message = true;
                 }
                 });
                
               // return false;
                
                
            }

}
