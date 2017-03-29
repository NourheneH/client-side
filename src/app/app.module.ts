import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './common/auth.guard';
//import {AUTH_PROVIDERS} from 'angular2-jwt/angular2-jwt.js';

import {FilterUser} from './pipe/filter_user';
import {TruncatePipe} from './pipe/filter_description';
import{ArraySortPipe} from './pipe/filter_date';


import { UserService } from './services/user.service';
import { LoginService } from './services/login.service';
import { TagService} from './services/tag.service';
import {TopicService} from './services/topic.service';



import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TagsComponent } from './tags/tags.component';
import { AddTagsComponent } from './add-tags/add-tags.component';
import { TopicsComponent } from './topics/topics.component';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { TechnicalSolutionsComponent } from './technical-solutions/technical-solutions.component';



//import {ValidationService} from './register/validators';

@NgModule({
  declarations: [
    FilterUser,
    TruncatePipe,
    ArraySortPipe,
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    UsersComponent,
    UserDetailsComponent,
    UserProfileComponent,
    TagsComponent,
    AddTagsComponent,
    TopicsComponent,
    AddTopicComponent,
    TechnicalSolutionsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [UserService,
    LoginService,
    TagService,
    TopicService,
    AuthGuard,
    //  AUTH_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
