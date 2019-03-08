import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {UserAlbumsComponent} from './user-albums/user-albums.component';
import {PhotosComponent} from './user-albums/photos/photos.component';

const routes: Routes = [
  {path: '', component: UsersComponent},
  {path: ':id/albums', component: UserAlbumsComponent},
  {path: ':id/photos', component: PhotosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
