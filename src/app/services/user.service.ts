import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import {Base_Url} from '../common/setting';
import {User} from '../models/users';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService{

   
    constructor(private http: Http){
      //  console.log("User service start ...")
    }

  getUsers(): Promise<any>{
      console.log("service getUsers start");
        let users=  this.http.get(Base_Url+'/users')
            .map(_body => _body.json());
            return Promise.resolve(users);
    }
/*    getUsers(){
        return this.http.get(Base_Url+'/users')
            .map(res =>{ res.json()
                    console.log(res);    
            });
            
    } */
/*
  getRoles(): Promise<any>{
        let roles = this.http.get(Base_Url+'/roles')
            .map(_body => _body.json());
             
        return    Promise.resolve(roles);
    }*/
   addUser(newUser) : Promise<any>{
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let user =  this.http.post(Base_Url+'/user', JSON.stringify(newUser), {headers: headers})
            .map(_body => _body.json());

            return Promise.resolve(user);
    }
    getByEmail(email): Promise<any> {
       let user = this.http.get(Base_Url+'/users/' + email)
            .map(_body => _body.json());
            return Promise.resolve(user);
                 
    };
}