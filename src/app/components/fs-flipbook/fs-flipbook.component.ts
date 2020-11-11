import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef,
  Input, NgZone,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { IFsFlipbookConfig } from '../../interfaces/fs-flipbook-config.interface';
import { IFlipbookOptions, PageMode } from '../../interfaces/flipbook-options.interface';

import * as $ from 'jquery';
import { LazyScriptLoadingService } from '../../services/lazy-scripts-loading.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const DEFAULT_OPTIONS: IFlipbookOptions = {
  pageMode: PageMode.DoubleView
};

@Component({
  selector: 'fs-flipbook',
  templateUrl: 'fs-flipbook.component.html',
  styleUrls: [ 'fs-flipbook.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsFlipbookComponent implements OnInit, OnDestroy {
  @Input() config: IFsFlipbookConfig = null;
  @Input() mode: 'preview' | 'page';
  @Input() set pdfUrl(url: string) {
    if (url) {
      this._pdfUrl = url;

      if (this.loaded) {
        this.rerender();
      }
    }
  }

  get pdfUrl() {
    return this._pdfUrl;
  }

  @ViewChild('flipBook') flipBook: ElementRef;

  public id: string; // dynamic id for dom element
  public loaded = false;

  private _options: IFlipbookOptions = null;
  private _pdfUrl: string;
  private _bookElem: HTMLElement;

  private _destroy$ = new Subject<void>();

  constructor(
    private _lazyLoadService: LazyScriptLoadingService,
    private _zone: NgZone,
    private _cdRef: ChangeDetectorRef,
  ) {
    this.id = this.generateUniqId();
  }

  public ngOnInit() {
    this._lazyLoadService.loadScript('/flipbook.js')
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe(() => {
        this.loaded = true;

        this.setDefaultOptions();
        if (this._pdfUrl) {
          this.rerender();
        }

        this._cdRef.markForCheck();
      });
  }

  public ngOnDestroy() {
    this.removeDflip();

    this._destroy$.next();
    this._destroy$.complete();
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
    this._zone.runOutsideAngular(() => {
      if (this._bookElem) {
        this.removeDflip();
      }

      this.render();
    });
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

