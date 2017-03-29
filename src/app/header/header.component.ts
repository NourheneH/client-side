import { Component, OnInit, NgZone} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { UserService} from '../services/user.service';
import {User} from '../models/users';


@Component({
    selector: 'app-header',
    moduleId: 'module.id',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

    private isLoggedin: boolean;
    private email: string;
    private firstname : string;
    private lastname : string;
    private userId : string;
    user : User[];
    constructor(public router: Router, public loginService: LoginService, public userService: UserService, public zone: NgZone) {
       // this.isLoggedin = loginService.loggedIn();
        this.email = localStorage.getItem("username");
      this.zone.run(()=>{
            this.firstname = localStorage.getItem("firstname");
        this.lastname= localStorage.getItem("lastname");
    
        })
        this.userId = localStorage.getItem("userId");
    }
    getCurrentUser(){
        if(this.isAuthenticated){
        this.userService.getByEmail(this.email)
           .subscribe(function(r){
                   // console.log('hhhh')
                    console.log('im this person', r);
                    this.user = r;
                   console.log(this.user.data[0].firstname);
                 localStorage.setItem('userId', this.user.data[0]._id);
                 localStorage.setItem('firstname',this.user.data[0].firstname);
                  localStorage.setItem('lastname',this.user.data[0].lastname);
                })
            }
   
        
    }
     isAuthenticated () {
    return this.loginService.loggedIn();
};
    ngOnInit(){
        this.zone.run(()=>{
                     this.isAuthenticated();
        this.getCurrentUser();
        });
    }
    logout() {
        this.loginService.logout();
    }

    toggleNav(id) {
        let target = document.querySelector('#' + id);
        target.className = target.className.indexOf('open') >= 0 ? "profile dropdown" : "profile dropdown open";
    }
   

}
