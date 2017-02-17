import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params  } from '@angular/router';
import {User } from '../models/users';
import {UserService} from '../services/user.service';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
 user : User;
  id : string;
  
  constructor(public route: ActivatedRoute, public userService : UserService) { }

  ngOnInit() {
     this.route.params.subscribe(params => {
      this.id = params ['id'];
    this.getOwnerProfile();
   })
  }
getOwnerProfile(){
 
   console.log('this id getProfile',this.id);
   let self = this;
  this.userService.getUserById(this.id).then(
        function(res){
          res.subscribe(function(result){
           // console.log('this the profile of '+JSON.stringify(result,null," "));
             self.user =result.data;
          })
        }
  ) 
}
}
