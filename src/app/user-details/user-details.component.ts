import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params  } from '@angular/router';
import {User } from '../models/users';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() user : User;
  navigated = false; // true if navigated here
 

  constructor(public route: ActivatedRoute, public userService : UserService) {

  }
getProfile() {
  
   this.route.params.forEach((params: Params) => {
      if (params['userId'] !== undefined) {
        let userId = +params['userId'];
        this.navigated = true;
        this.userService.getUserById(userId).then(
        function(res){
          res.subscribe(function(r){
            console.log('this the profile of'+userId, r)
             this.user =r.data[0];
            // this.router.navigate(['profile']);
          })
        }
  ) 
      } 
    });
  
}
  ngOnInit() {
    this.getProfile();
  }

}
