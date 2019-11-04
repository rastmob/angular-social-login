import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DummyComponent } from "./dummy.component";

const routes: Routes = [
  { path: "", redirectTo: "/auth/login", pathMatch: "full" },
  {
    path: "auth",
    component: DummyComponent,
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule)
  },
  { path: "", redirectTo: "/auth/login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
