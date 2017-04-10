import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Base_Url } from '../common/setting';
import { User } from '../models/users';
import { Observable } from 'rxjs/Rx';

 // Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class UserService {


    constructor(private http: Http) {
        //  console.log("User service start ...")
    }

    getUsers() : Observable<User[]>{
         // ...using get request
         return this.http.get(Base_Url + '/users')
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
 /*   getUsers(): Promise<any> {
        console.log("service getUsers start");
        let users = this.http.get(Base_Url + '/users')
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
    addUser(newUser): Promise<any> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let user = this.http.post(Base_Url + '/user', JSON.stringify(newUser), { headers: headers })
            .map(_body => _body.json());

        return Promise.resolve(user);
    } 

    /**
     * get user by email
     * @param {string}
     * @returns {Observable<User>}
     */
    getByEmail(email:string): Observable<User> {
      return  this.http.get(Base_Url + '/users/email/' + email)
             .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
                       
 }; 
   getUserById(id): Promise<any> {
        let user = this.http.get(Base_Url + '/users/id/' + id)
            .map(_body => _body.json());
        return Promise.resolve(user);

    }
    /* updateProfile(user): Promise<any>{
        var headers = new Headers();
           headers.append('Content-Type', 'application/json');
    this.http.put(Base_Url+'/users/edit/'+user._id, JSON.stringify(user), {headers: headers})
               .map(_body => _body.json());
               return Promise.resolve(user);
    } */

    updateProfile(user) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        console.log('service update call' + JSON.stringify(user, null, " "));
        return this.http.put(Base_Url + '/users/edit/' + user._id, JSON.stringify(user), { headers: headers })
            .map(_body => {
                _body.json()
            });
    }
}