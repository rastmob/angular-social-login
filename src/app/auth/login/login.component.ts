import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { FacebookService } from "src/app/components/shared/services/facebook.service";

declare const FB: any;
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.sass"]
})
export class LoginComponent implements OnInit {
  constructor(
    private cdRef: ChangeDetectorRef,
    private facebookService: FacebookService
  ) {}

  ngOnInit() {}

  loginWithFacebook() {
    this.facebookService.signIn().subscribe((res) => {
      console.log(res);

      FB.api(`/me?fields=name,link`, (fbUser: any) => {
        console.log(fbUser.name);
        this.cdRef.detectChanges();
      });
    });
  }

  loginWithGoogle() {
    alert("Under construction..");
  }
}
