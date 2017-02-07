import {Component} from '@angular/core';
import{LoginComponent} from './login/login.component';
import {HeaderComponent} from './header/header.component';
import './operators';

@Component({
selector:"app-root",
moduleId: 'module.id',
providers : [HeaderComponent],
 templateUrl: './app.component.html',
//template:`<router-outlet></router-outlet>`
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