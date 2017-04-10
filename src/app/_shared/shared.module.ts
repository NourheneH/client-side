import {NgModule} from '@angular/core';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




import { AuthGuard } from './common/auth.guard';
//import {AUTH_PROVIDERS} from 'angular2-jwt/angular2-jwt.js';

import {FilterUser} from './pipe/filter_user';
import {TruncatePipe} from './pipe/filter_description';
import{ArraySortPipe} from './pipe/filter_date';


import { UserService } from './services/user.service';
import { LoginService } from './services/login.service';
import { TagService} from './services/tag.service';
import {TopicService} from './services/topic.service';




@NgModule({
 imports : [RouterModule,FormsModule,ReactiveFormsModule],
 declarations : [FilterUser,
    TruncatePipe,
    ArraySortPipe],
 exports : [FilterUser,
    TruncatePipe,
    ArraySortPipe],
  providers: [UserService,
    LoginService,
    TagService,
    TopicService,
    AuthGuard,
    //  AUTH_PROVIDERS
  ],
})

export class SharedModule {

}