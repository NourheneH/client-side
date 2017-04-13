import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../_shared/models/users';
import { UserService } from '../../_shared/services/user.service';
import { matchingPassword } from '../../authentification/register/validators';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


  form: FormGroup;
  user: User;
  id: string;

  constructor(public router: Router, public formBuilder: FormBuilder, public route: ActivatedRoute, public userService: UserService) {
   

    this.form = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],
      password: ['', Validators.required],
      confirm: ['', Validators.required],
    },
      { validator: matchingPassword('password', 'confirm') }

    )
  }
  

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getOwnerProfile();
      console.log('id', this.id);
    })
  }

  getOwnerProfile() {

    console.log('this id getProfile', this.id);
    let self = this;
    this.userService.getUserById(this.id).then(
      function (res) {
        res.subscribe(function (result) {
          // console.log('this the profile of '+JSON.stringify(result,null," "));
          self.user = result.data;
        })
      })
  }


  save() {
    console.log('befor' + JSON.stringify(this.user, null, " "));
    this.userService.updateProfile(this.user).subscribe(data => {
      // console.log('user after update'+JSON.stringify(data,null," "));
      this.router.navigate(['users'])
    });
  }
}
//}
