import { Component, Input, OnDestroy, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { IFsFlipbookConfig } from '../../interfaces/fs-flipbook-config.interface';
import { IFlipbookOptions, PageMode } from '../../interfaces/flipbook-options.interface';

import * as $ from 'jquery';

const DEFAULT_OPTIONS: IFlipbookOptions = {
  pageMode: PageMode.DoubleView
};

@Component({
  selector: 'fs-flipbook',
  templateUrl: 'fs-flipbook.component.html',
  styleUrls: [ 'fs-flipbook.component.scss' ],
})
export class FsFlipbookComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() config: IFsFlipbookConfig = null;
  @Input() mode: 'preview' | 'page';
  @Input() set pdfUrl(url: string) {
    if (url) {
      this._pdfUrl = url;
      this.rerender();
    }
  }

  get pdfUrl() {
    return this._pdfUrl;
  }

  @ViewChild('flipBook') flipBook: ElementRef;

  public id: string; // dynamic id for dom element

  private _options: IFlipbookOptions = null;
  private _pdfUrl: string;
  private _bookElem: HTMLElement;

  constructor() {}

  public ngOnInit() {
    this.setDefaultOptions();
    this.id = this.generateUniqId();
  }

  public ngAfterViewInit() {
    this.render();
  }

  public ngOnDestroy() {
    this.removeDflip();
  }

  public render() {
    if (this.mode === 'preview') {
      this.openPreviewMode();
    } else if (this.mode === 'page') {
      this.openInlinePageMode();
    } else {
      console.warn('Please, set a mode (preview or page)');
    }
  }

  public rerender() {
    if (this._bookElem) {
      this.removeDflip();
      this.render();
    }

  }

  private openInlinePageMode() {
    // because dflip library added flipBook function to the jquery fn
    ($('#' + this.id) as any).flipBook(this._pdfUrl, this._options);

    // for removing
    this._bookElem = document.getElementById(this.id);
  }

  private openPreviewMode() {
    // Because in this mode dflip.js library gets options only from window object with id of the div block
    // See assets/dflip/js/dflip.js file 7984 line
    window['option_' + this.id] = this._options;

    this.flipBook.nativeElement.setAttribute('source', this._pdfUrl);

    // This timeout is needed because of timing
    // between dflip and angular rendering
    setTimeout(() => {
      (<any>window).DFLIP.parseBooks();
    },100);

    // for removing
    this._bookElem = this.flipBook.nativeElement;
  }

  private setDefaultOptions() {
    this._options = Object.assign({}, DEFAULT_OPTIONS, this.config.flipbookOptions || {});
  }

  /**
   * Generate uniq id for dom element
   */
  private generateUniqId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  private removeDflip() {
    while (this._bookElem.firstChild) {
      this._bookElem.removeChild(this._bookElem.firstChild);
    }
  }
}

