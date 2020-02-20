import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PhotosComponent} from './photos.component';
import {SharedModule} from '../../utilities/modules/shared.module';
import {PhotoViewComponent} from './photo-view/photo-view.component';

const routes: Routes = [
  {
    path: '',
    component: PhotosComponent
  }
];

@NgModule({
  declarations: [
    PhotosComponent,
    PhotoViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PhotosModule {
}
