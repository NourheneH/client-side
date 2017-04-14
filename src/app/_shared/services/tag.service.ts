import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Base_Url } from '../common/setting';


import { Tag } from '../models/tags';

// Import RxJs required methods
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class TagService {


    constructor(private http: Http) {
        //  console.log("User service start ...")
    }
    /**
     * get All tags
     * @param {}
     * @returns {Observable<Tag>}
     */
    getTags(): Observable<Tag[]> {
        // ...using get request
        return this.http.get(Base_Url + '/tags')
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json().data)
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    /**
     * Add a tag
     * @param {string}
     * @returns {Observable<Tag>}
     */
    addTag(newTag): Observable<Tag[]> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(Base_Url + '/tag', JSON.stringify(newTag), { headers: headers })
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json().data)
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

}