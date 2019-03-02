import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AdminAppRoutingModule } from "./admin-app-routing.module";
import { AdminAppComponent } from "./admin-app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ApiService } from "../services/api.service";
import { VersionsComponent } from "./versions/versions.component";
import { VersionsResolverService } from "./versions/versions-resolver.service";
import { ChartsModule } from "ng2-charts";
import { DashboardResolverService } from "./dashboard/dashboard-resolver.service";
import { VersionsTableComponent } from "./versions/versions-table/versions-table.component";
import { VersionsChartComponent } from "./versions/versions-chart/versions-chart.component";
import { AudienceComponent } from "./audience/audience.component";
import { AudienceResolverService } from "./audience/audience-resolver.service";
import { ProsComponent } from "./pros/pros.component";
import { ProsResolverService } from "./pros/pros-resolver.service";
import { AboutComponent } from "./about/about.component";
import { SharedModule } from "../../modules/shared.module";

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		AdminAppRoutingModule,
		ChartsModule
	],
	declarations: [
		AdminAppComponent,
		DashboardComponent,
		VersionsComponent,
		VersionsTableComponent,
		VersionsChartComponent,
		AudienceComponent,
		ProsComponent,
		AboutComponent
	],
	providers: [
		ApiService,
		DashboardResolverService,
		VersionsResolverService,
		AudienceResolverService,
		ProsResolverService
	],
	entryComponents: [AboutComponent]
})
export class AdminAppModule {
}
