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

@Injectable()

export class TopicService {


    constructor( private http : Http  ){
    
    }
getTopics(): Observable<Topic[]>{
         // ...using get request
         return this.http.get(Base_Url + '/topics')
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
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