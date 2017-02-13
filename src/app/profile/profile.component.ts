import { Component, OnInit } from '@angular/core';
import {User } from '../models/users';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user : User[];

  constructor(public userService : UserService) { 

  }
getProfile() {
  
}
  ngOnInit() {
  }

}
