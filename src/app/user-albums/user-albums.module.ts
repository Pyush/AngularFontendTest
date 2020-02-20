import {NgModule} from '@angular/core';
import {UserAlbumsComponent} from './user-albums.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../utilities/modules/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {AlbumViewComponent} from './album-view/album-view.component';

const routes: Routes = [
  {
    path: '',
    component: UserAlbumsComponent
  }
];

@NgModule({
  declarations: [
    UserAlbumsComponent,
    AlbumViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class UserAlbumsModule {
}
