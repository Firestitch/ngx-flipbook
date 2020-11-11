import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { FsFlipbookComponent } from './components/fs-flipbook/fs-flipbook.component';

declare var require: any; // for AOT compilation

(window as any).$ = require('jquery');
(window as any).jQuery = require('jquery');
(window as any).PDFJS = require('pdfjs-dist/build/pdf');
(window as any).PDFJSWorker = require('pdfjs-dist/build/pdf.worker');

(window as any).THREE = require('@dearhive/dearflip-jquery-flipbook/dflip/js/libs/three.min.js');


@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    FsFlipbookComponent,
  ],
  declarations: [
    FsFlipbookComponent,
  ]
})
export class FsFlipbookModule {}
