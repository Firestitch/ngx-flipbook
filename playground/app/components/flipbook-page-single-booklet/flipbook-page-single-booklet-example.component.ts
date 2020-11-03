import { Component, OnInit } from '@angular/core';
import { IFsFlipbookConfig, PageMode, SinglePageMode } from '@firestitch/flipbook';


@Component({
  selector: 'flipbook-page-single-booklet-example',
  templateUrl: 'flipbook-page-single-booklet-example.component.html'
})
export class FlipbookPageSingleBookletExampleComponent implements OnInit {

  public config: IFsFlipbookConfig;
  public pdfUrl = './assets/pdf/example-pdf.pdf';

  constructor() {}

  public ngOnInit() {
    this.config = {
      flipbookOptions: {
        pageMode: PageMode.SingleView,
        singlePageMode: SinglePageMode.Booklet
      }
    }
  }
}
