import { ReplaySubject, Observable } from "rxjs";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root"
})
export class LazyLoadService {
  loadedLibraries: { [url: string]: ReplaySubject<void> } = {};

  load(url: string, type: "script" | "style"): Observable<void> {
    if (!url) return;

    const key = url.slice(url.lastIndexOf("/") + 1);

    if (this.loadedLibraries[key]) {
      return this.loadedLibraries[key].asObservable();
    }

    this.loadedLibraries[key] = new ReplaySubject();

    const library = document.createElement(
      type === "script" ? "script" : "link"
    );

    if (type === "script") {
      library.type = "text/javascript";
      (library as HTMLScriptElement).src = url;
    } else {
      library.type = "text/css";
      (library as HTMLLinkElement).rel = "stylesheet";
      (library as HTMLLinkElement).href = url;
    }

    library.onload = () => {
      this.loadedLibraries[key].next();
      this.loadedLibraries[key].complete();
    };

    document.body.appendChild(library);

    return this.loadedLibraries[key].asObservable();
  }
}
