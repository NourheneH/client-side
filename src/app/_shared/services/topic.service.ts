import { Injectable, NgZone } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Base_Url } from '../common/setting';


// Import RxJs required methods
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Topic } from '../models/topics';



@Injectable()

export class TopicService {



    constructor(private http: Http) {

    }

/**
 * get all topics
 * @param {}
 * @returns {Observable<Topic>}
 */

    getTopics(): Observable<Topic[]> {
        // ...using get request
        return this.http.get(Base_Url + '/topics')
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json().data)
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }


 /**
  * get topic by id
  *@param {string}
  *@returns {Observable<Topic>}
  */
    getTopicById(id): Observable<Topic> {
        return this.http.get(Base_Url + '/topics/' + id)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json().data)
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));


    }
/**
 * add topic 
 * @param {string}
 * @returns {Observable<Topic>}
 */
    addTopic(newTopic, id): Observable<Topic[]> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(Base_Url + '/topic/' + id, JSON.stringify(newTopic), { headers: headers })
            .map((res: Response) => res.json().data)
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }
}