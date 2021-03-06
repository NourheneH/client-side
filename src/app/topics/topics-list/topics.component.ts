import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Ng2PaginationModule} from 'ng2-pagination';

import {UserService} from '../../_shared/services/user.service';
import {TopicService} from '../../_shared/services/topic.service';
import {TagService} from '../../_shared/services/tag.service';


import {User} from '../../_shared/models/users';
import {Topic} from '../../_shared/models/topics'; 

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  
  topics: Topic [];
  topic : Topic



  constructor(public router: Router, private topicService: TopicService) {
    this.topics;

   }
 getAllTopics(){
     var scope = this;
     this.topicService.getTopics()
       .subscribe( 
         topics => {scope.topics = topics,
                   console.log("topics", topics)},
         //Bind to view 
         
         err => {
           //log errors if any 
           console.log(err);
         });

   }
 
  ngOnInit() {
    this.getAllTopics();


}

}
