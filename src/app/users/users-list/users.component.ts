import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Ng2PaginationModule} from 'ng2-pagination';


import {UserService} from '../../_shared/services/user.service';
import {User} from '../../_shared/models/users';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],

})

export class UsersComponent implements OnInit {
  
      
users : User[];
selectUser : User;
role: string;
//userId: string;
  constructor(public router: Router, private userService: UserService) {
    this.users;
    this.role = localStorage.getItem('role');
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
   isAdministrateur(){
       this.role = "false";
    }

ngOnInit() {
    this.getAllUser();
   // this.gotToProfile();
   console.log("is admin?", this.role);
//this.isAdministrateur();
  }
 
  

}
