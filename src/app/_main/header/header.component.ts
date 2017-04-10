import { Component, OnInit, NgZone} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../_shared/services/login.service';
import { UserService} from '../../_shared/services/user.service';
import {User} from '../../_shared/models/users';


@Component({
    selector: 'app-header',
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
       
    }
    getCurrentUser(){
        this.userService.getByEmail(this.email)
           .subscribe(function(r){
                   // console.log('hhhh')
                    console.log('im this person', r);
                    this.user = r;
                   console.log(this.user.data[0].firstname);
                 localStorage.setItem('userId', this.user.data[0]._id);
                 localStorage.setItem('firstname',this.user.data[0].firstname);
                  localStorage.setItem('lastname',this.user.data[0].lastname);
                  localStorage.setItem('role', this.user.data[0].isAdmin);
          
                })
           //    this.zone.run(() =>{
                 this.firstname = localStorage.getItem("firstname");
                this.lastname= localStorage.getItem("lastname");
      //  });
   

    }
     isAuthenticated () {
    return this.loginService.loggedIn();
};
    ngOnInit(){
         this.email = localStorage.getItem("email");
        this.getCurrentUser();
       
    }
    logout() {
        this.loginService.logout();
            this.router.navigate(['auth/login']);
     
    }

    // toggleNav(id) {
    //     let target = document.querySelector('#' + id);
    //     target.className = target.className.indexOf('open') >= 0 ? "profile dropdown" : "profile dropdown open";
    // }
   

}
