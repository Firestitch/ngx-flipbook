import { Component, OnInit } from '@angular/core';
import { IFsFlipbookConfig } from '../../../../src/interfaces';

@Component({
  selector: 'flipbook-page-example',
  templateUrl: 'flipbook-page-example.component.html'
})
export class FlipbookPageExampleComponent implements OnInit {

  public config: IFsFlipbookConfig;

  constructor() {}

  public ngOnInit() {
    this.config = {
      pdfUrl: './assets/pdf/example-pdf.pdf'
    }
  }
}
