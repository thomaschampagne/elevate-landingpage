import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, Observer } from "rxjs";
import { ApiService, IStats, IVersion } from "../../services/api.service";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class VersionsResolverService implements Resolve<IVersion[]> {

	constructor(private apiService: ApiService) {
	}

	public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IVersion[]> {

		return Observable.create((observer: Observer<IVersion[]>) => {

			return this.apiService.getStats().subscribe((stats: IStats) => {

					observer.next(stats.countByVersions);
				},
				(error: HttpErrorResponse) => {

					observer.error("Error occured: " + error.message);

				}, () => {

					observer.complete();

				}
			);
		});
	}
}

