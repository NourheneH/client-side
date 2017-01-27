import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import {User} from '../models/users';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService{

    private BASE_URL:string = 'http://localhost:3000/user/';
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
    }*/
   addUser(newUser) : Promise<any>{
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let user =  this.http.post('http://localhost:3000/user', JSON.stringify(newUser), {headers: headers})
            .map(_body => _body.json());

            return Promise.resolve(user);
    }
     /* addUser(newUser){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/user', JSON.stringify(newUser), {headers: headers})
            .map(res => res.json());
    }

    /* JSON.parse(JSON.stringify(newUser)) */
    /*
    	public addUser(body:User){
		let options = new RequestOptions({
        	headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' }) 
        });
		return this.http.post(`${this.BASE_URL}`,JSON.stringify(body), options)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}*/
}