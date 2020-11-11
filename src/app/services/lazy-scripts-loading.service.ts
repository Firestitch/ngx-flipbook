import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { ReplaySubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class LazyScriptLoadingService {
  loadedLibraries: { [url: string]: ReplaySubject<void> } = {};

  constructor(@Inject(DOCUMENT) private readonly document: any) { }

  loadScript(url: string): Observable<void> {
    if (this.loadedLibraries[url]) {
      return this.loadedLibraries[url].asObservable();
    }

    this.loadedLibraries[url] = new ReplaySubject();

    const script = this.document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = (data) => {
      this.loadedLibraries[url].next();
      this.loadedLibraries[url].complete();
    };

    this.document.body.appendChild(script);

    return this.loadedLibraries[url].asObservable();
  }
}
