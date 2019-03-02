import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ApiService, IStats } from "../../services/api.service";
import { Observable } from "rxjs";

@Injectable()
export class DashboardResolverService implements Resolve<IStats> {

	constructor(private apiService: ApiService) {
	}

	public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IStats> {
		return this.apiService.getStats();
	}
}
