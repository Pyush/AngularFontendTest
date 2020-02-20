import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LayoutModule} from '@angular/cdk/layout';
import {OverlayModule} from '@angular/cdk/overlay';
import {MaterialModule} from './material.module';


const sharedModule = [
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  MaterialModule,
  LayoutModule,
  OverlayModule
];

const sharedComponent = [

];

@NgModule({
  imports: [
    ...sharedModule
  ],
  exports: [
    ...sharedModule
  ],
  declarations: [
    ...sharedComponent
  ],
  entryComponents: [
    ...sharedComponent
  ]
})
export class SharedModule { }
