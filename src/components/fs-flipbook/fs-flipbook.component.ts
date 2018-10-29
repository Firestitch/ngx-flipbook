import { Component, Input, OnDestroy, ViewChild, ElementRef, OnInit } from '@angular/core';
import { IFsFlipbookConfig } from '../../interfaces';

import * as $ from 'jquery';

@Component({
  selector: 'fs-flipbook',
  templateUrl: 'fs-flipbook.component.html',
  styleUrls: [ 'fs-flipbook.component.scss' ],
})
export class FsFlipbookComponent implements OnInit, OnDestroy {
  @Input() config: IFsFlipbookConfig = null;
  @Input() mode: 'preview' | 'page';

  @ViewChild('flipBook') flipBook: ElementRef;

  constructor() {}

  public ngOnInit() {
    if (this.mode === 'preview') {
      this.openPreviewMode();
    } else if (this.mode === 'page') {
      this.openInlinePageMode();
    } else {
      console.warn('Please, set a mode (preview or page)');
    }
  }

  public ngOnDestroy() {

  }

  private openInlinePageMode() {
    setTimeout(() => {
      // because dflip library added flipBook function to the jquery fn
      ($('#fb-container') as any).flipBook(this.config.pdfUrl);
    }, 0)
  }

  private openPreviewMode() {
    this.flipBook.nativeElement.setAttribute('source', this.config.pdfUrl);

    // This timeout is needed because of timing
    // between dflip and angular rendering
    setTimeout(() => {
      (<any>window).DFLIP.parseBooks();
    },100);
  }
}

