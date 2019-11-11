import { Component, OnInit } from "@angular/core";
import { User } from "src/app/components/shared/models/user";

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

  constructor() {}

  ngOnInit() {}
}
