import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {UserService} from '../services/user.service';
import { User } from '../models/users';
//import { matchingPassword } from './validators';
//import { emailValidator } from './validators';


@Component({
    //moduleId:module.id,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    users: FormGroup;
    constructor(public fb: FormBuilder,private userService:UserService) { 
        this.userService = userService;
    }


  ngOnInit() {
    this.users = this.fb.group({
            firstname: ['', [Validators.required, Validators.minLength(2)]],
            lastname: ['', [Validators.required, Validators.minLength(2)]],
            email: ['', Validators.required],
            password: ['', Validators.required],
            confirm: ['', Validators.required],
        },

         //   { validator: [matchingPassword('password', 'confirm'), emailValidator('email')] }
        )
  }
      addUser({ value, valid }: { value: User, valid: boolean }) {
        console.log(value, valid)
    }

}
