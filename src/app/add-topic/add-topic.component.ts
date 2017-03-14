import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {Topic} from '../models/topics';
import {Tag} from '../models/tags';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css']
})
export class AddTopicComponent implements OnInit {

@Input()
TagRef : 'app-tags';


  topics : FormGroup; 

  constructor(public router: Router, public fb : FormBuilder) { }

  ngOnInit() {
    this.topics = this.fb.group({
      title : ['', Validators.required]
    })
  //this.TagRef.getAllTags();
  }

  addTopic(){

  }

}
