import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";
import { OldLandingComponent } from "./old-landing/old-landing.component";
import { ContinuousIntegrationBuildsComponent } from "./continuous-integration-builds/continuous-integration-builds.component";
import { FormsModule } from "@angular/forms";
import { AppRoutes } from "./app-routes";

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
		FormsModule,
		HttpClientModule,
		MaterialModule,
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
