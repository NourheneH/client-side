import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params  } from '@angular/router';

import {Topic} from '../../_shared/models/topics';
import {TopicService} from '../../_shared/services/topic.service';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.css']
})
export class TopicDetailsComponent implements OnInit {

  topic: Topic;
  id: string;

  constructor(public route: ActivatedRoute, public topicService: TopicService) {
    this.topic
   }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id = params['id'];
      this.getTopic();
    })
  }
getTopic() {
   console.log('this id getTopicById',this.id);
   let self = this;
  this.topicService.getTopicById(this.id)
  .subscribe( 
    topic => self.topic = topic,
    err => console.log(err)
             // console.log('this the profile of '+JSON.stringify(self.topic,null," "));
          )
  
}
}
