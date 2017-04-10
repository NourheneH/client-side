import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params  } from '@angular/router';
import {User } from '../../_shared/models/users';
import {UserService} from '../../_shared/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
 
  user : User;
  id : string;
 
   userId : any;
  constructor(public route: ActivatedRoute, public userService : UserService) {
    
  }

   ngOnInit() {
   
  this.route.params.subscribe(params => {
      this.id = params ['id'];
    this.getProfile();
   })
  }
getProfile(){
 
   console.log('this id getProfile',this.id);
   let self = this;
  this.userService.getUserById(this.id).then(
        function(res){
          res.subscribe(function(result){
           console.log('this details of user '+JSON.stringify(result,null," "));
             self.user =result.data;
          })
        }
  ) 
}

}
