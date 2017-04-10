import { Component, OnInit } from '@angular/core';
import {UserService} from '../_shared/services/user.service';
import { User } from '../_shared/models/users';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


 user: User;
  constructor(public userService: UserService ) { 
  this.user = new User();
  }

  ngOnInit() {
  }



 /* getInfoProfile() {
    this.userService.getEmail(localStorage.getItem('username')).subscribe(
      data => {
            this.user.firstname = data.firstname;
            this.user.lastname = data.lastname
      });
  }*/

}
