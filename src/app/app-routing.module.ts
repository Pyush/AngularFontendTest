import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: ':id/albums',
    loadChildren: () => import('./user-albums/user-albums.module').then(m => m.UserAlbumsModule)
  },
  {
    path: ':id/photos',
    loadChildren: () => import('./user-albums/photos/photos.module').then(m => m.PhotosModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
