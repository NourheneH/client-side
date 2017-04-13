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
            res => {
                this.router.navigate(['/dashboard']);
            }, 
            error => {
                this.message = true;
            }
        
            );
                
               // return false;
                
                
            }

}
