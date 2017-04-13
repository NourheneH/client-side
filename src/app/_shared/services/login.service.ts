import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import {Base_Url} from '../common/setting';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from '../models/users';
import { UserService } from './user.service';
import { tokenNotExpired } from 'angular2-jwt/angular2-jwt.js';

@Injectable()
export class LoginService {

    constructor(
        private router: Router,
        private http: Http,
        private zone : NgZone,

        
    ) {
        var user = User;
         
    }
   

    login(credentials) {
      return   this.http.post(Base_Url+'/authenticate', credentials)
             .map(res =>  {res.json()
             if(res.json().token !=null){
                 let user = res.json()
            localStorage.setItem('id_token', user.token);
            localStorage.setItem('currentuser', JSON.stringify(user.currentuser));
              }
            },
             err => console.log(err) ) 
        
    }

    logout() {
        localStorage.removeItem('email');
        localStorage.clear()
        console.log('fassa5', localStorage.getItem('email'));
      
        
    }

    loggedIn() {
        return tokenNotExpired();
    }
    

}
