import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from './modules/material.module';
import {HttpclientService} from './services/httpclient.service';
import { UsersComponent } from './users/users.component';
import { UserAlbumsComponent } from './user-albums/user-albums.component';
import { UserComponent } from './users/user/user.component';
import { PhotosComponent } from './user-albums/photos/photos.component';
import { AlbumViewComponent } from './user-albums/album-view/album-view.component';
import { PhotoViewComponent } from './user-albums/photos/photo-view/photo-view.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserAlbumsComponent,
    UserComponent,
    PhotosComponent,
    AlbumViewComponent,
    PhotoViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    HttpclientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
