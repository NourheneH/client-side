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

    /**
     * Get tag by id 
     * @param {string}
     * @returns{Observable<Tag>}
     */
    getTagbyId(id): Observable<Tag> {
        return this.http.get(Base_Url + '/tags/id/' + id)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json().data)
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    /**
     * Update Tag
     * @param {Tag}
     * @returns {Observable<Tag>}
     */
    updateTag(tag): Observable<Tag> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(Base_Url + '/tags/edit/' + tag._id, JSON.stringify(tag), { headers: headers })
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json().data)
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    /**
     * Delete Tag
     * @param {string}
     * @returns {boolean}
     */
    deleteTag(id): Observable<any> {
        return this.http.delete(Base_Url +'/tags/' + id)
             // ...and calling .json() on the response to return data
            .map((res: Response) => res.json().data)
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

}