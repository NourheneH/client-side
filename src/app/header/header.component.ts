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
    user : User[];
    constructor(public router: Router, public loginService: LoginService, public userService: UserService, public zone: NgZone) {
       // this.isLoggedin = loginService.loggedIn();
        this.email = localStorage.getItem("username");
        this.zone.run(()=>{
            this.firstname = localStorage.getItem("firstname");
        this.lastname= localStorage.getItem("lastname");
    
        })
        
    }
    getCurrentUser(){
        if(this.isAuthenticated){
        this.userService.getByEmail(this.email).then(
            function(res){
                
                res.subscribe(function(r){
                   // console.log('hhhh')
                    console.log('im this person', r);
                    this.user = r.data[0];
                   localStorage.setItem('firstname',this.user.firstname);
                   localStorage.setItem('lastname',this.user.lastname);
                })
            }
        )
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
