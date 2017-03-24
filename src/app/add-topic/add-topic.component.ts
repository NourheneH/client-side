import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {Topic} from '../models/topics';
import {Tag} from '../models/tags';

import {TagService} from '../services/tag.service';
import {TopicService} from '../services/topic.service';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css']
})
export class AddTopicComponent implements OnInit {
tags : Tag [];

  topics : FormGroup; 
  userId : String;
  //tagId : String;

  constructor(public router: Router, public fb : FormBuilder, public tagService: TagService, public topicService: TopicService) { 
   this.userId = localStorage.getItem("userId");
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
     this.tagService.getTags().then(
       function(res){
         res.subscribe(function(r){
           //console.log('here tags to choose', r.data);
           scope.tags = r.data;
         })
       }
     )
 }
 addTopic(){
 var newTopic= this.topics.value;
 //console.log('befor' + JSON.stringify(this.userId, null, " "));
    this.topicService.addTopic(newTopic, this.userId).then(function(res){
      res.subscribe(newTopic=> {
        console.log('here new Topic', newTopic);
      });
    })
   // console.log('success')
   // this.router.navigate(['topics']);
 }

}
