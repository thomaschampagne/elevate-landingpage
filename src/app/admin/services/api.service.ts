import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { AuthenticationService } from "./authentication.service";
import * as _ from "lodash";
import { Observable, of } from "rxjs";
import { EndPointsService } from "./end-points.service";

export interface IStats {
	totalCount: number;
	countByVersions: IVersion[];
	countByLocale: [{ locale: string; count: number; percent: number }];
	pros: IPro[];
	countSince24h: ICountSince;
	countSince48h: ICountSince;
	countSince7Days: ICountSince;
	countSince30Days: ICountSince;
	realTime: ICountSince;
}

export interface IVersion {
	count: number;
	version: string;
	percent: number;
}

export interface IPro {
	stravaId: number;
	name: string;
	lastSeen: string;
}

export interface IAudience {
	realTime: ICountSince;
	since24h: ICountSince;
	since48h: ICountSince;
	since7Days: ICountSince;
	since30Days: ICountSince;
}

export interface ICountSince {
	from: string;
	to: string;
	count: number;
}

@Injectable()
export class ApiService {

	private static SERVICE_STATS = "/stats";

	private stats: IStats = null;

	constructor(private httpClient: HttpClient,
				private authenticationService: AuthenticationService,
				private endPointsService: EndPointsService) {
	}

	public getStats(): Observable<IStats> {

		if (!_.isEmpty(this.stats)) {
			console.log("Using existing stats in cache");
			return of(this.stats);
		}

		return this.getFromApi(ApiService.SERVICE_STATS);
	}

	private getFromApi(service: string): Observable<IStats> {

		return new Observable<IStats>(observer => {

			const endPoint = this.endPointsService.getApiUrl() + service;

			this.httpClient.get<IStats>(endPoint, {
				headers: new HttpHeaders().set("Authorization", "Bearer " + AuthenticationService.grabToken())
			}).subscribe(
				(stats: IStats) => { // Successful responses call the first callback.

					this.stats = stats; // store
					observer.next(stats);

				}, (err: HttpErrorResponse) => { // Errors will call this callback instead:

					observer.error(err.message);
					this.handleApiCallsError();

				}, () => {
					observer.complete();
				}
			);
		});
	}

	private handleApiCallsError() {
		this.authenticationService.logout();
	}
}
