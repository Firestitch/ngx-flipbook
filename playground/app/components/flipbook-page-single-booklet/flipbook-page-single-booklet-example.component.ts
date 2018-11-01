import { Component, OnInit } from '@angular/core';
import { IFsFlipbookConfig } from '../../../../src/interfaces';
import { PageMode, SinglePageMode } from '../../../../src/interfaces/flipbook-options.interface';

@Component({
  selector: 'flipbook-page-single-booklet-example',
  templateUrl: 'flipbook-page-single-booklet-example.component.html'
})
export class FlipbookPageSingleBookletExampleComponent implements OnInit {

  public config: IFsFlipbookConfig;

  constructor() {}

  public ngOnInit() {
    this.config = {
      pdfUrl: './assets/pdf/example-pdf.pdf',
      flipbookOptions: {
        pageMode: PageMode.SingleView,
        singlePageMode: SinglePageMode.Booklet
      }
    }
  }
}
