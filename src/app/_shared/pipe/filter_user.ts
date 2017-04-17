import {Pipe, PipeTransform} from '@angular/core';
import {User} from '../models/users';

@Pipe({name: 'filterUser'})
export class FilterUser implements PipeTransform {
    transform(users: User[]) {
   
    return users.filter(user => {
      return user._id !=  JSON.parse(localStorage.getItem('currentuser'))._id
    });
  }
   }
