import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService{
    constructor(private http: Http){
        console.log("User service start ...")
    }

  getUsers(){
        return this.http.get('http://localhost:3000/users')
            .map(res => res.json());
    }

     addUser(newUser){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/user', JSON.stringify(newUser), {headers: headers})
            .map(res => res.json());
    }
}