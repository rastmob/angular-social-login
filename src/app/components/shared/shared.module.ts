import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutPrimaryComponent } from "./layout/layout-primary/layout-primary.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [LayoutPrimaryComponent],
  imports: [CommonModule, RouterModule],
  exports: [CommonModule, LayoutPrimaryComponent]
})
export class SharedModule {}
