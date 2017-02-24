import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Base_Url } from '../common/setting';
import { Tag } from '../models/tags';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class TagService {


    constructor(private http: Http) {
        //  console.log("User service start ...")
    }


    getTags(): Promise<any> {
        console.log("service getTags start");
        let tags = this.http.get(Base_Url + '/tags')
            .map(_body => _body.json());
        return Promise.resolve(tags);
    }

      getTagById(id): Promise<any> {
        let tag = this.http.get(Base_Url + '/tags/id/' + id)
            .map(_body => _body.json());
        return Promise.resolve(tag);

    }

     addUser(newTag): Promise<any> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let tag = this.http.post(Base_Url + '/tag', JSON.stringify(newTag), { headers: headers })
            .map(_body => _body.json());

        return Promise.resolve(tag);
    }
}