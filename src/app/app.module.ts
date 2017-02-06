import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './common/auth.guard';
//import {AUTH_PROVIDERS} from 'angular2-jwt/angular2-jwt.js';



import {UserService} from './services/user.service';
import {LoginService} from './services/login.service';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {routing} from './app.routes';
import { SitemenuComponent } from './sitemenu/sitemenu.component';

//import {ValidationService} from './register/validators';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    SitemenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpModule,
    routing
  ],
  providers: [UserService,
    LoginService,
    AuthGuard,
  //  AUTH_PROVIDERS
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }
