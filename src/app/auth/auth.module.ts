import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { SharedModule } from "../components/shared/shared.module";

@NgModule({
  declarations: [LoginComponent, LogoutComponent],
  imports: [AuthRoutingModule, SharedModule]
})
export class AuthModule {}
