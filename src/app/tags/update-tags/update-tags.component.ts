import { Component, OnInit ,ElementRef,Renderer,ViewChild} from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Router, ActivatedRoute, Params  } from '@angular/router';
import {Tag} from '../../_shared/models/tags';
import {TagService} from '../../_shared/services/tag.service';
import {SimpleTinyComponent} from '../../_shared/simple-tiny/simple-tiny.component';
declare  var tinymce: any;
@Component({
  selector: 'app-update-tags',
  templateUrl: './update-tags.component.html',
  styleUrls: ['./update-tags.component.css'],
  providers : [SimpleTinyComponent]
})
export class UpdateTagsComponent implements OnInit {
  form: FormGroup;
  tag: Tag;
  id: string;

  constructor(public route: ActivatedRoute,private rd: Renderer, public router: Router,public formBuilder: FormBuilder, public tagService: TagService) { 
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description : ['', Validators.required],
    })
  }



  ngOnInit() {
      this.route.params.subscribe(params => {
      this.id = params ['id'];
      this.getTag();

     
   })
  }
  getTag(){
    let self = this;
    this.tagService.getTagbyId(this.id)
      .subscribe( result =>{
        self.tag= result;
      })
  }
 save(){
  // console.log(this.form)
  this.tag.description = this.form.value.description;
   this.tagService.updateTag(this.tag)
    .subscribe(data =>{
      this.tag = data;
      console.log('tag updated', this.tag);
      this.router.navigate(['tags']);
    })
 }
}
