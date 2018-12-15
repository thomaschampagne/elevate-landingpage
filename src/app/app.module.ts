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
					path: "landing", component: LandingComponent
				},
				{
					path: "stravistix", component: OldLandingComponent
				},
				{
					path: "builds", component: ContinuousIntegrationBuildsComponent
				},
				{
					path: "",
					redirectTo: "/landing",
					pathMatch: "full"
				}
			]
		)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
