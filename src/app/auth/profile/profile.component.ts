import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  userModel: any = {
    name: "Mehmet Alp",
    email: "mehmetakifalp@gmail.com"
  };

  constructor() {}

  ngOnInit() {}
}
