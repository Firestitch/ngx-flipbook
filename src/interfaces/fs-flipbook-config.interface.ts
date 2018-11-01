import { IFlipbookOptions } from './flipbook-options.interface';

export interface IFsFlipbookConfig {
    pdfUrl: string;
    previewUrl?: string;
    title?: string;
    flipbookOptions?: IFlipbookOptions;
}
