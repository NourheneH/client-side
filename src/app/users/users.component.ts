import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../models/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
      
users : any;
  constructor(private userService: UserService) {
  }

   getAllUser(){
      this.userService.getUsers().then(
        function(res){
            res.subscribe(function(r){
              console.log('here',r.data);
              this.users = r.data; 
            });
        }
      )
  }
  ngOnInit() {
    this.getAllUser();
  }



}
