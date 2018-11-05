import { Component, OnInit } from '@angular/core';
import { IFsFlipbookConfig } from '../../../../src/interfaces';

@Component({
  selector: 'flipbook-page-example',
  templateUrl: 'flipbook-page-example.component.html'
})
export class FlipbookPageExampleComponent implements OnInit {

  public config: IFsFlipbookConfig = {};
  public pdfUrl = './assets/pdf/example-pdf.pdf';

  constructor() {}

  public ngOnInit() {
  }

  public changePdfUrl() {
    this.pdfUrl = './assets/pdf/second-pdf-example.pdf';
  }
}
