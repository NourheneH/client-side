import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { UserService } from '../../_shared/services/user.service';
import { User } from '../../_shared/models/users';
import { matchingPassword } from './validators';



@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    users: FormGroup;
   // userList: User[];
    // userss : User;
    //firstnam : String;

    constructor(public router: Router, public fb: FormBuilder, private userService: UserService) {
        this.userService = userService;
    }


    ngOnInit() {
        this.users = this.fb.group({
            firstname: ['', [Validators.required, Validators.minLength(2)]],
            lastname: ['', [Validators.required, Validators.minLength(2)]],
            email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],
            password: ['', Validators.required],
            confirm: ['', Validators.required],
        },
            { validator: matchingPassword('password', 'confirm') }

        )
    }

    addUser() {
        var newUser = this.users.value;
        

        this.userService.addUser(newUser)
        .subscribe(newUser => {
               // newUser.userId = newUser.data._id;
                console.log('here', newUser);
               this.router.navigate(['']); 

            });
        
            
    }


}
