import {Tag} from './tags';
import {User} from './users';

export class Topic {
    _id : string ; 
    title : string;
    user : User;
    description : string;
   tags : Array<Tag> ;
   created_at : Date ;
   
    
}