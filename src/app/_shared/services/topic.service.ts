import { Injectable, NgZone } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import {Base_Url} from '../common/setting';

import { Observable } from 'rxjs/Rx';
 // Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Topic} from '../models/topics';
/*import {User} from '../models/users';
import {Tag} from '../models/tags';*/

interface topicParams{
    userId?: string,
    tags?: Array<string>,
    date?: Date
};

@Injectable()

export class TopicService {

    params:topicParams = {};

    constructor( private http : Http  ){
    
    }

    setParams(params){
        this.params = params;

        return this;
    }

    getTopics(): Observable<Topic[]>{
            // ...using get request
            return this.http.get(Base_Url + '/topics', this.params)
                            // ...and calling .json() on the response to return data
                            .map((res:Response) => res.json())
                            //...errors if any
                            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
            
    }

 getTopicById(id): Promise<any> {
        let topic = this.http.get(Base_Url + '/topics/' + id)
            .map(_body => _body.json());
        return Promise.resolve(topic);

    }




addTopic(newTopic,id): Promise<any> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let topic = this.http.post(Base_Url + '/topic/' + id, JSON.stringify(newTopic), { headers: headers })
            .map(_body => {_body.json()
              //  console.log('after', JSON.stringify(id, null, '')),
               // console.log('hello', _body)
                    });

        return Promise.resolve(topic);
    }
}