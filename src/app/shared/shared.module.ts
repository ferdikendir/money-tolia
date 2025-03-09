import { NgModule } from "@angular/core";
import { LogoComponent } from "./components/logo/logo.component";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./material.module";

@NgModule({
  declarations: [
    LogoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    LogoComponent,
    MaterialModule,
    CommonModule
  ]
})
export class SharedModule { }
