import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material.module";
import { AdminLoginComponent } from "./login/admin-login.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminAppGuard } from "./app/admin-app.guard";
import { AuthenticationService } from "./services/authentication.service";
import { EndPointsService } from "./services/end-points.service";
import { FormsModule } from "@angular/forms";


@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		AdminRoutingModule,
		FormsModule
	],
	declarations: [
		AdminLoginComponent
	],
	providers: [
		AdminAppGuard,
		AuthenticationService,
		EndPointsService
	]
})
export class AdminModule {
}
