import { Component, OnInit } from '@angular/core';
import { IFsFlipbookConfig } from '../../../../src/interfaces';
import { PageMode, SinglePageMode } from '../../../../src/interfaces/flipbook-options.interface';

@Component({
  selector: 'flipbook-page-single-zoom-example',
  templateUrl: 'flipbook-page-single-zoom-example.component.html'
})
export class FlipbookPageSingleZoomExampleComponent implements OnInit {

  public config: IFsFlipbookConfig;
  public pdfUrl = './assets/pdf/example-pdf.pdf';

  constructor() {}

  public ngOnInit() {
    this.config = {
      flipbookOptions: {
        pageMode: PageMode.SingleView,
        singlePageMode: SinglePageMode.Zoom
      }
    }
  }
}
