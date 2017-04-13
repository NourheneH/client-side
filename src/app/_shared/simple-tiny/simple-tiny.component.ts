import { Component,  
   OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output,
forwardRef } from '@angular/core';

  import {ControlValueAccessor,NG_VALUE_ACCESSOR}from '@angular/forms'
import 'tinymce';
import 'tinymce/themes/modern';

import 'tinymce/plugins/table';
import 'tinymce/plugins/link';

  declare  var tinymce: any;

  const contentAccessor = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SimpleTinyComponent),
  multi: true
};


@Component({
  selector: 'app-simple-tiny',
  templateUrl: './simple-tiny.component.html',
  styleUrls: ['./simple-tiny.component.css'],
  providers: [contentAccessor]
})
export class SimpleTinyComponent implements AfterViewInit, ControlValueAccessor ,OnDestroy   {


   private onTouch: Function;
  private onModelChange: Function;

  registerOnTouched(fn) {
    this.onTouch = fn;
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }

  writeValue(value) {
    this.editorContent = value;
  }

   @Input() elementId: String;
    @Input() model: String;
   @Output() onEditorContentChange = new EventEmitter();

  constructor() { }
 

  editor;
  editorContent: string = null;
  
  ngAfterViewInit() {

    tinymce.init({
      selector:  `#${this.elementId}`,
      plugins: ['link', 'paste', 'table'],
      skin_url: 'assets/skins/lightgray',
      
      setup: editor => {
        this.editor = editor;
      
       editor.on('keyup change', () => {
          const tinyContent = editor.getContent();
          this.editorContent = tinyContent;
          this.onEditorContentChange.emit(tinyContent);
          this.onModelChange(tinyContent);
          this.onTouch();
          console.log(tinyContent);
        });
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

}
