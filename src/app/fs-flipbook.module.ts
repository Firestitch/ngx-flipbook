import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsFlipbookComponent } from './components/fs-flipbook/fs-flipbook.component';

declare var require: any; // for AOT compilation

(window as any).$ = require('jquery');
(window as any).jQuery = require('jquery');
(window as any).PDFJS = require('pdfjs-dist/build/pdf');
(window as any).PDFJSWorker = require('pdfjs-dist/build/pdf.worker');
(window as any).THREE = require('./assets/dflip/js/libs/three.min.js');

require('./assets/dflip/js/libs/mockup.min.js');
require('./assets/dflip/js/dflip.js');
require('./assets/dflip/js/libs/pdf.js');
require('./assets/dflip/js/libs/pdf.worker.js');


@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    FsFlipbookComponent,
  ],
  declarations: [
    FsFlipbookComponent,
  ]
})
export class FsFlipbookModule {}
