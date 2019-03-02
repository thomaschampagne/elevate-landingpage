import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import * as _ from "lodash";
import { AuthenticationService } from "../services/authentication.service";
import { AdminRoutes } from "../admin.routes";

@Injectable()
export class AdminAppGuard implements CanActivate {

	constructor(public router: Router) {

	}

	public canActivate(next: ActivatedRouteSnapshot,
					   state: RouterStateSnapshot): boolean {

		const hasToken = !_.isEmpty(AuthenticationService.grabToken());
		if (hasToken) {
			return true;
		}

		// Not token in so redirect to login page with the return url
		this.router.navigate([AdminRoutes.RELATIVE, AdminRoutes.LOGIN]);
		return false;
	}
}
