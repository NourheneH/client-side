import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Role} from '../models/role';
import 'rxjs/add/operator/map';

@Injectable()
export class RoleService{
    constructor(private http: Http){
        console.log("Role service start ...")
    }

  

  getRoles(): Promise<any>{
        let roles = this.http.get('http://localhost:3000/roles')
            .map(_body => _body.json());
             
        return    Promise.resolve(roles);
    }

    /* addUser(newUser){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/user', JSON.stringify(newUser), {headers: headers})
            .map(res => res.json());
    }*/
}