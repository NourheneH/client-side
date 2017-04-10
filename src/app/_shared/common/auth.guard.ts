import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt/angular2-jwt.js';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate() {
   // if (tokenNotExpired())
      if(!localStorage.getItem('id_token') || localStorage.getItem('id_token')==null){
              this.router.navigate(['auth/login']);
              return false;
      }
      return true;
        
      }


  }
//thabet fil localstorage wela cookies 