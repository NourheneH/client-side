import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';


import {TagService} from '../../_shared/services/tag.service';
import {Tag} from '../../_shared/models/tags';


@Component({
  selector: 'app-add-tags',
  templateUrl: './add-tags.component.html',
  styleUrls: ['./add-tags.component.css']
})
export class AddTagsComponent implements OnInit {


tags : FormGroup;
  constructor(public router: Router, public fb:FormBuilder, private tagService : TagService) { 
    this.tagService = tagService;
  }

  ngOnInit() {
    this.tags = this.fb.group({
      name : ['',Validators.required],
      description : ['', Validators.required]
    })
  }
  addTag(){
    var newTag = this.tags.value;
    this.tagService.addUser(newTag).then(function(res){
      res.subscribe(newTag=> {
        console.log('here new tag', newTag);
      });
    })
    this.router.navigate(['tags']);
  }

}
