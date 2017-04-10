import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Ng2PaginationModule} from 'ng2-pagination';


import {TagService} from '../../_shared/services/tag.service';
import {Tag} from '../../_shared/models/tags';
 
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
     this.tagService.getTags()
       .subscribe( 
         tags => scope.tags = tags,
                   // console.log("tags", tags)
         //Bind to view 
         
         err => {
           //log errors if any 
           console.log(err);
         });
       }
     


  ngOnInit() {
   this.getAllTags();
  }

}
