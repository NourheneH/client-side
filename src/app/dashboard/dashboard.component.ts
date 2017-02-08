import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import { User } from '../models/users';


@Component({
  selector: 'app-dashboard',
  moduleId: 'module.id',
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
