import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Base_Url } from '../common/setting';
import { Tag } from '../models/tags';
import { Observable } from 'rxjs/Rx';
 // Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class TagService {


    constructor(private http: Http) {
        //  console.log("User service start ...")
    }

  getTags() : Observable<Tag[]>{
         // ...using get request
         return this.http.get(Base_Url + '/tags')
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
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