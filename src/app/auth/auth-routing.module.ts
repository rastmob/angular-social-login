import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { LayoutPrimaryComponent } from "../components/shared/layout/layout-primary/layout-primary.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "",
    component: LayoutPrimaryComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "logout",
        component: LogoutComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AuthRoutingModule {}
