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
  id_user : String;

  constructor(public userService : UserService) { 

  }
getProfile() {
  this.userService.getUserById(this.id_user).then(
        function(res){
          res.subscribe(function(r){
            console.log('this the profile of'+this.id_user, r)
             this.user =r.data[0];
          })
        }
  )
  
}
  ngOnInit() {
    this.getProfile();
  }

}
