import { Component, OnInit } from '@angular/core';
import { IFsFlipbookConfig } from '@firestitch/flipbook';

@Component({
  selector: 'flipbook-preview-example',
  templateUrl: 'flipbook-preview-example.component.html'
})
export class FlipbookPreviewExampleComponent implements OnInit {

  public config: IFsFlipbookConfig = {};
  public pdfUrl = './assets/pdf/example-pdf.pdf';
  constructor() {}

  public ngOnInit() {
  }
}
