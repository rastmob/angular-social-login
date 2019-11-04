import { Injectable } from "@angular/core";
import { LazyLoadService } from "./lazy-load.service";
import { Observable, Subject } from "rxjs";
declare const FB;
@Injectable({
  providedIn: "root"
})
export class FacebookService {
  constructor(private lazyLoadService: LazyLoadService) {
    this.lazyLoadService
      .load("//connect.facebook.net/en-US/sdk.js", "script")
      .subscribe(() => {
        FB.init({
          appId: "360217428004899",
          cookie: true,
          xfbml: true,
          version: "v3.0"
        });
      });
  }

  signIn(): Observable<any> {
    const result = new Subject();

    FB.login(
      (fbRes: any) => {
        if (fbRes.authResponse) {
          result.next(fbRes.authResponse);
          result.complete();
        } else {
          result.next(false);
          result.complete();
        }
      },
      { scope: "email,public_profile" }
    );

    return result;
  }
}
