import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {User} from '../models/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],

})

export class UsersComponent implements OnInit {
  
      
users : User[];
selectUser : User;
  constructor(public router: Router, private userService: UserService) {
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
  goToDetail(){
    
    this.router.navigate(['user', this.selectUser.userId]);

  }

ngOnInit() {
    this.getAllUser();
   // this.gotToProfile();
  }
 
  

}
