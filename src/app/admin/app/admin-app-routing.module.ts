import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminAppComponent } from "./admin-app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { VersionsComponent } from "./versions/versions.component";
import { VersionsResolverService } from "./versions/versions-resolver.service";
import { DashboardResolverService } from "./dashboard/dashboard-resolver.service";
import { AudienceComponent } from "./audience/audience.component";
import { AudienceResolverService } from "./audience/audience-resolver.service";
import { ProsResolverService } from "./pros/pros-resolver.service";
import { ProsComponent } from "./pros/pros.component";

export class AdminAppRoutes {
	public static readonly DASHBOARD: string = "dashboard";
	public static readonly VERSIONS: string = "versions";
	public static readonly AUDIENCE: string = "audience";
	public static readonly PROS: string = "pros";
}

const routes: Routes = [
	{
		path: "",
		component: AdminAppComponent,
		children: [
			{
				path: AdminAppRoutes.DASHBOARD,
				component: DashboardComponent,
				resolve: {
					stats: DashboardResolverService
				}
			},
			{
				path: AdminAppRoutes.VERSIONS,
				component: VersionsComponent,
				resolve: {
					versions: VersionsResolverService
				}
			}, {
				path: AdminAppRoutes.AUDIENCE,
				component: AudienceComponent,
				resolve: {
					audience: AudienceResolverService
				}
			},
			{
				path: AdminAppRoutes.PROS,
				component: ProsComponent,
				resolve: {
					pros: ProsResolverService
				}
			},
			{
				path: "",
				redirectTo: AdminAppRoutes.DASHBOARD,
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminAppRoutingModule {
}
