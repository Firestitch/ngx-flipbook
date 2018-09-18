import { Component, OnInit } from '@angular/core';
import { IFsFlipbookConfig } from '../../../../src/interfaces';

@Component({
  selector: 'flipbook-example',
  templateUrl: 'flipbook-example.component.html'
})
export class ExampleComponent implements OnInit {

  public config: IFsFlipbookConfig;

  constructor() {}

  public ngOnInit() {
    this.config = {
      pdfUrl: './assets/pdf/example-pdf.pdf'
    }
  }
}
