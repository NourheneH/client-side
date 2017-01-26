import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService{
    constructor(private http: Http){
        console.log("User service start ...")
    }

  getUsers(): Promise<any>{
        let users=  this.http.get('http://localhost:3000/users')
            .map(_body => _body.json());
            return Promise.resolve(users);
    }
/*
  getRoles(): Promise<any>{
        let roles = this.http.get('http://localhost:3000/roles')
            .map(_body => _body.json());
             
        return    Promise.resolve(roles);
    }
     addUser(newUser) : Promise<any>{
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let user =  this.http.post('http://localhost:3000/user', JSON.stringify(newUser), {headers: headers})
            .map(_body => _body.json());

            return Promise.resolve(user);
    }*/
}