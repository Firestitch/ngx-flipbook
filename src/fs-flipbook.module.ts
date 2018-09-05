import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsFlipbookComponent } from './components/fs-flipbook/fs-flipbook.component';
// import { FsComponentService } from './services';

declare var require: any; // for AOT compilation

(window as any).$ = require('jquery');
(window as any).jQuery = require('jquery');
(window as any).THREE = require('./assets/dflip/js/libs/three.min.js');
require('./assets/dflip/js/libs/mockup.min.js');
require('./assets/dflip/js/dflip.js');

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    FsFlipbookComponent,
  ],
  entryComponents: [
  ],
  declarations: [
    FsFlipbookComponent,
  ],
  providers: [
    // FsComponentService,
  ],
})
export class FsFlipbookModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsFlipbookModule,
      // providers: [FsComponentService]
    };
  }
}
