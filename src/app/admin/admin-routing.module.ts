import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminAppGuard } from "./app/admin-app.guard";
import { AdminRoutes } from "./admin.routes";
import { AdminLoginComponent } from "./login/admin-login.component";

const routes: Routes = [
	{
		path: AdminRoutes.APP,
		canActivate: [AdminAppGuard],
		loadChildren: "./app/admin-app.module#AdminAppModule"
	},
	{
		path: AdminRoutes.LOGIN,
		component: AdminLoginComponent
	},
	{path: "", redirectTo: AdminRoutes.APP},
	{path: "**", redirectTo: AdminRoutes.APP},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule {
}
