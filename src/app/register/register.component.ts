import {Component, OnInit} from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';
import {UserService} from '../services/user.service';
import { User } from '../models/users';
import { matchingPassword } from './validators';



@Component({
    //moduleId:module.id,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    users: FormGroup;
    userList: User[];
   // userss : User;
   //firstnam : String;
    
    constructor(public fb: FormBuilder,private userService:UserService) { 
         this.userService = userService;


 /*
          this.userService.getUsers().then(
             function(res){
                  res.subscribe( function(r){
                      console.log('here',r.data);
                      this.users = r.data;
                  } );
              }
             
          ); */
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
  /*  addUser({ value, valid }: { value: User, valid: boolean}) {
        console.log(value, valid) 
}*/

/*
    this.roleService.getRoles().then(
             function(res){
                  res.subscribe( function(r){
                      console.log('here',r.message);
                       this.roles = r.message;
                  } );
              }
             
          );
 */
  addUser(){
        //users.preventDefault();
     var newUser = this.users.value;
     

       // this.users.push(newUser);
      /*  this.userService.addUser(newUser).then(function(res){
                res.subscribe(function(newUser){
            const userArray = <FormArray>this.users; 
      //  users = this.fb.array([])
            userArray.push(this.newUser);
            console.log('here',newUser);
        })
        });
    */
    this.userService.addUser(newUser).then(function(res){
          res.subscribe(newUser => {
       //   <FormArray>this.users.push(newUser);
      //  const userArray = <FormArray>this.users;  
        // userArray.push(newUser);
     // userList.push(newUser);
            console.log('here',newUser);
             
            });
    })
         
    }
       

}
