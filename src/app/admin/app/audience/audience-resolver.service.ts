import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ApiService, IAudience, IStats } from "../../services/api.service";
import { Observable, Observer } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";


@Injectable()
export class AudienceResolverService implements Resolve<IAudience> {

	constructor(private apiService: ApiService) {

	}

	public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAudience> {

		return Observable.create((observer: Observer<IAudience>) => {

			return this.apiService.getStats().subscribe((stats: IStats) => {

					const audience: IAudience = {
						realTime: stats.realTime,
						since24h: stats.countSince24h,
						since48h: stats.countSince48h,
						since7Days: stats.countSince7Days,
						since30Days: stats.countSince30Days
					};

					observer.next(audience);
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
