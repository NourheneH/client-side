import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { User } from '../models/users';
import { UserService } from './user.service';
import { tokenNotExpired } from 'angular2-jwt/angular2-jwt.js';

@Injectable()
export class LoginService {

    //public token: String;
    //isloggedin : Boolean ;
    constructor(
        private router: Router,
        private http: Http,
    ) {
        var user = User;

    }

    login(credentials) {
        this.http.post('http://localhost:3000/authenticate', credentials)
            .map(res => res.json())
            .subscribe(
            // We're assuming the response will be an object
            // with the JWT on an id_token key
            data => {
                localStorage.setItem('id_token', data.token),
                    localStorage.setItem('username', credentials.email);

                console.log('isloggedin', data);
            },
            error => console.log(error)

            );
    }

    logout() {
        this.router.navigate(['']);
        window.localStorage.clear();
    }

    loggedIn() {
        console.log('test', tokenNotExpired());
        return tokenNotExpired();
    }
    getEmail(email) {
        let user = this.http.get('http://localhost:3000/users' + email)
            .map(_body => _body.json());
        console.log('here', user);
    };

}
