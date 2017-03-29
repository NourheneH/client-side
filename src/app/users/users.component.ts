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
//userId: string;
  constructor(public router: Router, private userService: UserService) {
    this.users;
  }

    getAllUser(){
        var scope = this;
      this.userService.getUsers()
      .subscribe(
        users => {scope.users = users
      console.log('users:', users)  
      },
        err => {
          console.log(err);
        });
  }
  goToDetail(){
    
    this.router.navigate(['user', this.selectUser._id]);

  }

ngOnInit() {
    this.getAllUser();
   // this.gotToProfile();
  }
 
  

}
