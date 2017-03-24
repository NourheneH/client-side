import { Injectable, NgZone } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import {Base_Url} from '../common/setting';
import 'rxjs/add/operator/map'
import {Topic} from '../models/topics';
import {User} from '../models/users';
import {Tag} from '../models/tags';

@Injectable()

export class TopicService {

    tag : Tag;
    constructor( private http : Http  ){
    
    }
getTopics(): Promise<any>{
  let topics = this.http.get(Base_Url + '/topics')
    .map(_body => _body.json());
    return Promise.resolve(topics);
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