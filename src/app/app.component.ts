import {Component} from '@angular/core';
import{LoginComponent} from './login/login.component'
import './operators';

@Component({
selector:"app-root",
moduleId: 'module.id',
template:`<router-outlet></router-outlet>`
})
export class AppComponent{

}


/*
@Component({
 // moduleId:module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
}
*/