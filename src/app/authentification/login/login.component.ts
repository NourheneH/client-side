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
            res => {
                this.router.navigate(['/dashboard']);
            }, 
            // err => {
            //     this.message = true;
            // }
        
            );
                
               // return false;
                
                
            }

}
