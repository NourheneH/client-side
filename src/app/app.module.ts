import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Ng2PaginationModule} from 'ng2-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import {routing} from './app.routes';

import { AppComponent } from './app.component';

import {SharedModule} from './_shared/shared.module';

import { AuthComponent } from './authentification/auth/auth.component';
import { RegisterComponent } from './authentification/register/register.component';
import { LoginComponent } from './authentification/login/login.component';


import { MainComponent } from './_main/main/main.component';
import { HeaderComponent } from './_main/header/header.component';
import { SidebarComponent } from './_main/sidebar/sidebar.component';
import { FooterComponent } from './_main/footer/footer.component';


import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users-list/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { TagsComponent } from './tags/tags-list/tags.component';
import { AddTagsComponent } from './tags/add-tags/add-tags.component';
import { TopicsComponent } from './topics/topics-list/topics.component';
import { AddTopicComponent } from './topics/add-topic/add-topic.component';
import { TopicDetailsComponent } from './topics/topic-details/topic-details.component';
import { UpdateTagsComponent } from './tags/update-tags/update-tags.component';





//import {ValidationService} from './register/validators';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AuthComponent,
    MainComponent,
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
    TopicDetailsComponent,
    UpdateTagsComponent,

    
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    Ng2PaginationModule
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
