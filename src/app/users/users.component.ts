import { Component,Pipe, PipeTransform, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../models/users';

/*@Pipe({name: 'values'})
export class ValuesPipe implements PipeTransform {
    transform(value: any, args?: any[]): Object[] {
        let keyArr: any[] = Object.keys(value),
            dataArr = [],
            keyName = args[0];

        keyArr.forEach((key: any) => {
            value[key][keyName] = key;
            dataArr.push(value[key])
        });

        if(args[1]) {
            dataArr.sort((a: Object, b: Object): number => {
                return a[keyName] > b[keyName] ? 1 : -1;
            });
        }

        return dataArr;
    }
}*/

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],

})

export class UsersComponent implements OnInit {
  
      
users : User[];
  constructor(private userService: UserService) {
    this.users;
  }

    getAllUser(){
        var scope = this;
      this.userService.getUsers().then(
        function(res){
            res.subscribe(function(r){
              console.log('here',r.data);
              scope.users = r.data; 
            });
        }
      )
  }
ngOnInit() {
    this.getAllUser();
  }
 
  

}
