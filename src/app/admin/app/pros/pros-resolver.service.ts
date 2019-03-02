import { Injectable } from "@angular/core";
import { ApiService, IPro, IStats } from "../../services/api.service";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, Observer } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import * as _ from "lodash";

@Injectable()
export class ProsResolverService implements Resolve<IPro[]> {

	constructor(private apiService: ApiService) {
	}

	public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPro[]> {

		return Observable.create((observer: Observer<IPro[]>) => {

			return this.apiService.getStats().subscribe((stats: IStats) => {

					observer.next(_.reverse(_.sortBy(stats.pros, (pro: IPro) => {
						return pro.lastSeen;
					})));

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
