import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
//import { contentHeaders } from '../common/headers';
import { User } from '../models/users';
import { tokenNotExpired } from 'angular2-jwt/angular2-jwt.js';

@Injectable()
export class LoginService{
    constructor(private router: Router, private http: Http) { }



   /* getByid(id){
         return this.http.get('http://localhost:3000/users'+id)
            .map(_body => _body.json());
         }
*/
    logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("username");
        this.router.navigate(['login']);
    }

        login(user: User) {
        let body = JSON.stringify(user);
        this.http.post('http://localhost:3000/users/authenticate', body )
            .subscribe(
            response => {
                if (JSON.stringify(response.json().success) === "true") {
                    localStorage.setItem('id_token', JSON.stringify(response.json().token));
                    localStorage.setItem('email', JSON.stringify(response.json().email));
                   this.router.navigate(['home']);
                }
                else {
                    window.alert(JSON.stringify(response.json().message));
                }
            },
            error => {
                alert(error.text());
                console.log(error.text());
                return false;
            });

    }
    isLoggedin() {
        if (tokenNotExpired())
            return true;
        else
            return false;
    }

}