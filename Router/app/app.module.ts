import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { UserDetailComponent } from './user-details.component';
import { UsersComponent } from './users.component';
import { UserService } from './user.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    UserDetailComponent,
    UsersComponent
  ],
  providers: [
  UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
