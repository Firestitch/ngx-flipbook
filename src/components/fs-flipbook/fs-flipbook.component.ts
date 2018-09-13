import { OnChanges, Component, Input, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { IFsFlipbookConfig } from '../../interfaces';


@Component({
  selector: 'fs-flipbook',
  templateUrl: 'fs-flipbook.component.html',
  styleUrls: [ 'fs-flipbook.component.scss' ],
})
export class FsFlipbookComponent implements OnChanges, OnDestroy {
  @Input() config: IFsFlipbookConfig = null;
  @ViewChild('flipBook') flipBook: ElementRef;

  constructor() {}

  public ngOnChanges() {
    if (this.config) {
      this.flipBook.nativeElement.setAttribute('source', this.config.pdfUrl);
      this.flipBook.nativeElement.setAttribute('thumb', this.config.previewUrl);

      // This timeout is needed because of timing 
      // between dflip and angular rendering
      setTimeout(() => {
        (<any>window).DFLIP.parseBooks();
      },100);
    }
  }

  public ngOnDestroy() {

  }
}

