import { NgModule } from "@angular/core";
import { LogoComponent } from "./components/logo/logo.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        LogoComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        LogoComponent
    ]
})
export class SharedModule { }