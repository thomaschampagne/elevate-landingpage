import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminLoginComponent } from "./login/admin-login.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminAppGuard } from "./app/admin-app.guard";
import { AuthenticationService } from "./services/authentication.service";
import { EndPointsService } from "./services/end-points.service";
import { SharedModule } from "../modules/shared.module";


@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		AdminRoutingModule
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
