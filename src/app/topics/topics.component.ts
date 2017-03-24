import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


import {UserService} from '../services/user.service';
import {TopicService} from '../services/topic.service';


import {User} from '../models/users';
import {Topic} from '../models/topics'; 

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  
  topics: Topic [];
  topic : Topic
  user : User;
  constructor(public router: Router, private topicService: TopicService, private userService: UserService) {
    this.topics;
   }
 getAllTopics(){
     var scope = this;
     this.topicService.getTopics().then(
       function(res){
         res.subscribe(function(r){
           console.log('here tags', r.data);
           scope.topics = r.data;
         })
       }
     )
   }
 /*getNameUser(){
      let self = this;
    this.userService.getUserById("58a46ab1341ab422d865d29a").then(
      function(res){
        res.subscribe(function(result){
          self.user = result.data;
        })
      }
    )
 } */
  ngOnInit() {
    this.getAllTopics();
  }

}
