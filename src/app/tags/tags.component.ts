import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TagService} from '../services/tag.service';
import {Tag} from '../models/tags';
 
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags : Tag [];

  constructor(public router : Router, private tagService: TagService) {
    this.tags
   }

   getAllTags(){
     var scope = this;
     this.tagService.getTags().then(
       function(res){
         res.subscribe(function(r){
           console.log('here tags', r.data);
           scope.tags = r.data;
         })
       }
     )
   }

  ngOnInit() {
    this.getAllTags();
  }

}
