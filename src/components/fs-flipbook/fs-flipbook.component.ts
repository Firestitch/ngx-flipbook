import { OnChanges, Component, Input, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { IFsFlipbookConfig } from '../../interfaces';


@Component({
  selector: 'fs-component',
  templateUrl: 'fs-flipbook.component.html',
  styleUrls: [ 'fs-flipbook.component.scss' ],
})
export class FsComponentComponent implements OnChanges, OnDestroy {
  @Input() config: IFsFlipbookConfig = null;
  @ViewChild('flipBook') flipBook: ElementRef;

  // public isShow = false;

  private _flipBook: HTMLElement;

  constructor() {

  }

  public ngOnChanges() {
      if (this.config) {
          // this.isShow = true;
          // this._flipBook = document.getElementById('flipBook');
          this.flipBook.nativeElement.setAttribute('source', this.config.pdfUrl);
          this.flipBook.nativeElement.setAttribute('thumb', this.config.previewUrl);
      }
  }

  public ngOnDestroy() {

  }
}

