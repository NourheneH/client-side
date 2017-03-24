import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TopicService} from '../services/topic.service';
import {Topic} from '../models/topics'; 

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topics: Topic [];

  constructor(public router: Router, private topicService: TopicService) {
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
 
  ngOnInit() {
    this.getAllTopics();
  }

}
