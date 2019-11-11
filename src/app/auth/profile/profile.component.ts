import { Component, OnInit } from "@angular/core";
import { User } from "src/app/components/shared/models/user";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  userModel: User = {
    name: "Mehmet Alp",
    email: "mehmetakifalp@gmail.com"
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.userModel.name = this.route.snapshot.params["name"];
    this.userModel.email = this.route.snapshot.params["email"];
  }
}
