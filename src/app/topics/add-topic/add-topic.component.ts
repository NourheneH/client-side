import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {Topic} from '../../_shared/models/topics';
import {Tag} from '../../_shared/models/tags';

import {TagService} from '../../_shared/services/tag.service';
import {TopicService} from '../../_shared/services/topic.service';

import {SimpleTinyComponent} from '../../_shared/simple-tiny/simple-tiny.component';
@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css'],
  providers : [SimpleTinyComponent]
})
export class AddTopicComponent implements OnInit {
  tags : Tag [];

  topics : FormGroup; 
  userId : String;
  //tagId : String;

  constructor(public router: Router, public fb : FormBuilder, public tagService: TagService, public topicService: TopicService) { 
   this.userId = JSON.parse(localStorage.getItem('currentuser'))._id;
   }

  ngOnInit() {
    this.topics = this.fb.group({
      title : ['', Validators.required],
    tags : ['', Validators.required],
      description : ['', Validators.required],
    })
 this.getNamesOfTags();
  }

 getNamesOfTags(){
    var scope = this;
     this.tagService.getTags()
       .subscribe( 
         tags => {scope.tags = tags,
           console.log("tags", tags)
         //Bind to view 
         },
         err => {
           //log errors if any 
           console.log(err);
         });
 }
 addTopic(){
 var newTopic= this.topics.value;
 //console.log('befor' + JSON.stringify(this.userId, null, " "));
    this.topicService.addTopic(newTopic, this.userId)
    .subscribe(newTopic=> {
        console.log('here new Topic', newTopic);
        this.router.navigate(['topics']);
      });
 }

}
