import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";
import { OldLandingComponent } from "./old-landing/old-landing.component";
import { ContinuousIntegrationBuildsComponent } from "./continuous-integration-builds/continuous-integration-builds.component";
import { AppRoutes } from "./app-routes";
import { SharedModule } from "./modules/shared.module";

@NgModule({
	declarations: [
		AppComponent,
		LandingComponent,
		OldLandingComponent,
		ContinuousIntegrationBuildsComponent
	],
	imports: [
		BrowserAnimationsModule,
		BrowserModule,
		SharedModule,
		RouterModule.forRoot(
			[
				{
					path: AppRoutes.LANDING, component: LandingComponent
				},
				{
					path: AppRoutes.OLD_LANDING, component: OldLandingComponent
				},
				{
					path: AppRoutes.BUILDS, component: ContinuousIntegrationBuildsComponent
				},
				{
					path: AppRoutes.ADMIN,
					loadChildren: "./admin/admin.module#AdminModule"
				},
				{
					path: "",
					redirectTo: AppRoutes.LANDING,
					pathMatch: "full"
				},
				{path: "**", component: LandingComponent}
			],
			{
				useHash: true
			}
		)
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
