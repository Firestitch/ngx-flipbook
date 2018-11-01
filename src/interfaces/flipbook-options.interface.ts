import { ITextOptions } from './text-options.interface';

export enum Direction {
  Right = 1, // default
  Left
}

export enum PageMode {
  Auto = null, // default
  SingleView = 1,
  DoubleView
}

export enum SinglePageMode {
  Auto = null, // default
  Zoom = 1,
  Booklet
}

export enum PageSize {
  Auto = 0, // default
  Single,
  Double
}

export enum Hard {
  Hard = 'hard',
  None = 'none',
  Cover = 'cover'
}

export enum ControlsPosition {
  Bottom = 'bottom', // default
  Top = 'top',
  Hide = 'hide',
}


export interface IFlipbookOptions {
  webgl?: boolean;
  webglShadow?: boolean;
  soundEnable?: boolean;
  height?: string;
  autoEnableOutline?: boolean;
  autoEnableThumbnail?: boolean;
  overwritePDFOutline?: boolean;
  enableDownload?: boolean;
  duration?: number;
  direction?: Direction;

  pageMode?: PageMode;
  singlePageMode?: SinglePageMode;

  backgroundColor?: string;
  forceFit?: boolean;
  transparent?: boolean;
  hard?: Hard;
  annotationClass?: string;
  autoPlay?: boolean;
  autoPlayDuration?: number;
  autoPlayStart?: boolean;
  maxTextureSize?: number;
  minTextureSize?: number;
  rangeChunkSize?: number;
  icons?: Object;
  text?: ITextOptions;
  allControls?: string; // valid control names: altPrev,pageNumber,altNext,outline,thumbnail,zoomIn,zoomOut,fullScreen,sharemore,download,pageMode,startPage,endPage,sound
  moreControls?: string;
  hideControls?: string;
  controlsPosition?: ControlsPosition;
  paddingTop?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingBottom?: number;
  scrollWheel?: boolean;
  zoomRatio?: number;
  pageSize?: PageSize;
  onCreate?: Function;
  onCreateUI?: Function;
  onFlip?: Function;
  beforeFlip?: Function;
  onReady?: Function;
}
