import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
//import { contentHeaders } from '../common/headers';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { User } from '../models/users';
import { tokenNotExpired } from 'angular2-jwt/angular2-jwt.js';

@Injectable()
export class LoginService{ 

//public token: String;
            constructor (
                private router: Router,
                private http: Http
            ){
                var user = User;
  //              this.token ;
            }

                login(credentials) {
    this.http.post('http://localhost:3000/authenticate', credentials)
      .map(res => res.json())
      .subscribe(
        // We're assuming the response will be an object
        // with the JWT on an id_token key
        data =>{ localStorage.setItem('id_token', data.token),
                console.log('isloggedin', data);   
        },
        error => console.log(error)
        
      );
  }
/*
            login(newUser): Observable<boolean> {
                console.log('service started');
        return this.http.post('http://localhost:3000/authenticate', JSON.stringify(newUser))
            .map((response: Response) => {
                 console.log('here', newUser);
                // login successful if there's a jwt token in the response
                let token = response.json().token;
                if (token) {
                    // set token property
                    this.token = token;
                    console.log('here');
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    window.sessionStorage.setItem('currentUser', JSON.stringify({ username: newUser.fistname, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    /*
    
    constructor(private router: Router, private http: Http) {
      // this.isloggedin = false;  
     }
     
 login(newUser) {



console.log('service login');
        var headers = new Headers();
       // var creds = "email=" + user.email + "&password=" + user.password;
        headers.append('Content-Type','application/json');
         return new Promise (resolve => {
             let data = JSON.stringify('newUser');
         this.http.post('http://localhost:3000/authenticate', data, {headers:headers})
            .map(data =>{ data.json()
                  window.localStorage.setItem('token', data.json().token);
             });
                console.log('login success');
                console.log('user', data);
                
                    
               // if(data.json())
                
            } )

     /*   var headers = new Headers();
        var creds = "email=" + user.email + "&password=" + user.password;
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        return new Promise(resolve => {
        
            this.http.post('http://localhost:3000/authenticate', creds, {headers: headers}).map(data => {
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
