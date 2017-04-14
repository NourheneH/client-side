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
    /**
     * Get All Users
     * @param {}
     * @returns {Observable<User>}
     */
    getUsers(): Observable<User[]> {
        // ...using get request
        return this.http.get(Base_Url + '/users')
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json().data)
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    /**
     * Add User
     *@param {string}
     *@returns {Observable<User>}
     */
    addUser(newUser): Observable<User> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(Base_Url + '/user', JSON.stringify(newUser), { headers: headers })
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json().data)
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    /**
     * Get user by id
     * @param {string}
     * @returns {Observable<User>}
     */
    getUserById(id): Observable<User> {
        return this.http.get(Base_Url + '/users/id/' + id)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json().data)
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    /**
     * Update profile user
     * @param {User}
     * @returns {Observable<User>}
     */
    updateProfile(user): Observable<User> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(Base_Url + '/users/edit/' + user._id, JSON.stringify(user), { headers: headers })
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json().data)
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}