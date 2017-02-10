import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import {Base_Url} from '../common/setting';
import 'rxjs/add/operator/map'
import { User } from '../models/users';
import { UserService } from './user.service';
import { tokenNotExpired } from 'angular2-jwt/angular2-jwt.js';

@Injectable()
export class LoginService {

    constructor(
        private router: Router,
        private http: Http,
        private zone : NgZone
        
    ) {
        var user = User;
         
    }
   

    login(credentials) {
      return   this.http.post(Base_Url+'/authenticate', credentials)
            .map(res => res.json())
           
    }

    logout() {
        this.zone.run(() =>{
            this.router.navigate(['']);
        window.localStorage.clear();
        } );
        
    }

    loggedIn() {
      //  console.log('test', tokenNotExpired());
        return tokenNotExpired();
    }
    

}
