import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
//import { contentHeaders } from '../common/headers';
import { User } from '../models/users';
import { tokenNotExpired } from 'angular2-jwt/angular2-jwt.js';

@Injectable()
export class LoginService{
    
    constructor(private router: Router, private http: Http) {
      // this.isloggedin = false;  
     }
     
 login(user:User) {



console.log('service login');

        var headers = new Headers();
        var creds = "email=" + user.email + "&password=" + user.password;
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        return new Promise(resolve => {
        
            this.http.post('http://localhost:3000/authenticate', creds, {headers: headers}).subscribe(data => {
            console.log('login success')
            if(data.json().success){
                
                window.localStorage.setItem('token', data.json().token);
          //  this.isLoggedin = true; }   
          //  resolve(this.isLoggedin);
            }
                
        }, (res) => { console.log('res', res); }); 
            
        });
        
        
    }
    
    logout() {
      //  this.isLoggedin = false;
        window.localStorage.clear();
    }




   /* getByid(id){
         return this.http.get('http://localhost:3000/users'+id)
            .map(_body => _body.json());
         }
    logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("email");
        this.router.navigate(['login']);
    }

        login(user: User) {
          //  console.log('login passe');
        let body = JSON.stringify(user);
        
        this.http.post('http://localhost:3000/authenticate', body, { headers:contentHeaders } )
            .subscribe(
            data => {
              // response =>{
        // if (JSON.stringify(response.json().success) == "true") {
               if(data.json().success){
                    console.log('login');
                   // localStorage.setItem('id_token', JSON.stringify(response.json().token));
                    //localStorage.setItem('email', JSON.stringify(response.json().email));
                   //this.router.navigate(['home']);
                   
                }
                else {
              //   window.alert(JSON.stringify(response.json().message));
                   window.alert(data.json().message);
                }
            },
            error => {
                alert(error.text());
                console.log(error.text());
                return false;
            });

    }
    /*
    isLoggedin() {
        if (tokenNotExpired())
            return true;
        else
            return false;
    }*/

}