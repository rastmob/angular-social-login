import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutPrimaryComponent } from "./components/shared/layout/layout-primary/layout-primary.component";

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
