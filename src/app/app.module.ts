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

const LANDING_ROUTE = "landing";
const OLD_LANDING_ROUTE = "stravistix";
const BUILDS_ROUTE = "builds";

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
		HttpClientModule,
		MaterialModule,
		RouterModule.forRoot(
			[
				{
					path: LANDING_ROUTE, component: LandingComponent
				},
				{
					path: OLD_LANDING_ROUTE, component: OldLandingComponent
				},
				{
					path: BUILDS_ROUTE, component: ContinuousIntegrationBuildsComponent
				},
				{
					path: "",
					redirectTo: LANDING_ROUTE,
					pathMatch: "full"
				},
				{path: "**", component: LandingComponent}
			]
		)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
