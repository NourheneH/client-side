import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params  } from '@angular/router';

import {Topic} from '../models/topics';
import {TopicService} from '../services/topic.service';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.css']
})
export class TopicDetailsComponent implements OnInit {

  topic: Topic;
  id: string;

  constructor(public route: ActivatedRoute, public topicService: TopicService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id = params['id'];
      this.getTopic();
    })
  }
getTopic() {
   console.log('this id getTopicById',this.id);
   let self = this;
  this.topicService.getTopicById(this.id).then(
        function(res){
          res.subscribe(function(result){
           // console.log('this the profile of '+JSON.stringify(result,null," "));
             self.topic =result.data;
          })
        }
  ) 
}
}
