import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from "@angular/core";
import { FacebookService } from "src/app/components/shared/services/facebook.service";
import { GoogleService } from "src/app/components/shared/services/google.service";
import { Router } from "@angular/router";

declare const FB: any;
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.sass"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  googleAuth: string;
  constructor(
    private cdRef: ChangeDetectorRef,
    private facebookService: FacebookService,
    private googleService: GoogleService,
    private router: Router
  ) {}

  ngOnInit() {}

  loginWithFacebook() {
    this.facebookService.signIn().subscribe((res) => {
      console.log(res);

      FB.api(`/me?fields=name,email`, (fbUser: any) => {
        console.log(fbUser.name);
        console.log(fbUser);
        this.router.navigate(["/auth/profile", fbUser.name, fbUser.email]);
      });
    });
  }

  loginWithGoogle() {
    this.googleService.signIn().subscribe((res) => {
      this.googleAuth = res;
      let profile = this.googleService.auth2.currentUser
        .get()
        .getBasicProfile();
      console.log(profile.getName() || "");
      this.cdRef.detectChanges();
    });
  }
}
