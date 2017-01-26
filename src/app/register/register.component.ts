import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {UserService} from '../services/user.service';
import {RoleService} from '../services/role.service';
import { User } from '../models/users';
import {Role} from '../models/role';
import { matchingPassword } from './validators';



@Component({
    //moduleId:module.id,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    users: FormGroup;
    
   roles :Role[] =[];
    constructor(public fb: FormBuilder,private userService:UserService, private roleService:RoleService) { 
         this.userService = userService;
/*
     this.roleService.getRoles().then(function(res){
            roles = res.roles;
        }, function(res){
            roles = res.roles;
        });
/*

        this.roleService.getRoles().success().error(funv)

       /*  this.roleService.getRoles()
            .subscribe(roles => {
                this.roles = roles;
            }); */
          //  this.roles=[];
          this.roleService.getRoles().then(
             function(res){
                  res.subscribe( function(r){
                      //console.log('here',r.message);
                       this.roles = r.message;
                  } );
              }
             
          );
    }


  ngOnInit() {
    this.users = this.fb.group({
            firstname: ['', [Validators.required, Validators.minLength(2)]],
            lastname: ['', [Validators.required, Validators.minLength(2)]],
            email: ['', [Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],
            password: ['', Validators.required],
            confirm: ['', Validators.required],
    },
            {validator: matchingPassword('password','confirm')}
        
    )
    //[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*
    //, Validators.pattern('/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/')]
  }
      addUser({ value, valid }: { value: User, valid: boolean}) {
        console.log(value, valid) 
        console.log(
           this.roles[0]
        )
}
   
       

}
