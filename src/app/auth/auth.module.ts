import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
  declarations: [LoginComponent, LogoutComponent],
  imports: [AuthRoutingModule]
})
export class AuthModule {}
