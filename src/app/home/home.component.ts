import { Component  } from '@angular/core';
import { Router } from '@angular/router';
//import {LoginService} from '../services/login.service';
import { SitemenuComponent } from '../sitemenu/sitemenu.component';

@Component({
  selector: 'home',
  providers: [SitemenuComponent],
  moduleId: 'module.id',
  templateUrl: './home.component.html',
 // styleUrls: ['./home.component.css']
     
})

export class HomeComponent {

//  private isLoggedin: boolean;
  //  private firstname:string;

   /* constructor(public router: Router,public loginService: LoginService) {
       // this.isLoggedin = loginService.loggedIn();
        this.firstname = localStorage.getItem("username");
        
    }*/
    constructor(){

    }
  /* 
    logout(){
        this.loginService.logout();
        
    } 


    toggleNav(id){
    

        let target = document.querySelector('#'+id);

        target.className = target.className.indexOf('open') >= 0 ? "profile dropdown" : "profile dropdown open";
    }
    */
}
