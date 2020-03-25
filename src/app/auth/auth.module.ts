import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthRoutes } from "./auth.routing";
import {
  LoginComponent,
  NavigateComponent,
  RegisterComponent
} from "./components";

@NgModule({
  imports: [CommonModule, AuthRoutes],
  declarations: [LoginComponent, NavigateComponent, RegisterComponent]
})
export class AuthModule {}
