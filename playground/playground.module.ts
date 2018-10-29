import './styles.scss';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FsFlipbookModule } from '../src';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app/material.module';
import { FsExampleModule } from '@firestitch/example';
import {  FlipbookPageExampleComponent, FlipbookPreviewExampleComponent } from './app/components';

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsFlipbookModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsExampleModule,
  ],
  entryComponents: [
  ],
  declarations: [
    AppComponent,
    FlipbookPageExampleComponent,
    FlipbookPreviewExampleComponent
  ],
  providers: [
  ],
})
export class PlaygroundModule {
}
