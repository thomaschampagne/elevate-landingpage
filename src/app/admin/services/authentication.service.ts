import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import { Router } from "@angular/router";
import { Observable, Observer } from "rxjs";
import { EndPointsService } from "./end-points.service";
import { AdminRoutes } from "../admin.routes";

interface IAuthResponse {
	token: string;
}

export interface IAuthStatus {
	authenticated: boolean;
	token?: string;
	errorCode?: number;
	errorMessage?: string;
}

@Injectable()
export class AuthenticationService {

	public static grabToken(): string {
		return localStorage.getItem("token");
	}

	constructor(public router: Router,
				public httpClient: HttpClient,
				public endPointsService: EndPointsService) {
	}

	public login(login: string, password: string): Observable<IAuthStatus> {

		return Observable.create((observer: Observer<IAuthStatus>) => {

			const endPoint = this.endPointsService.getApiUrl() + "/auth";

			this.httpClient.get(endPoint, {

				headers: new HttpHeaders().set("Authorization", "Basic " + btoa(login + ":" + password))

			}).subscribe((data: IAuthResponse) => {

				console.debug("IAuthResponse", data);

				localStorage.setItem("token", data.token);
				observer.next({
					authenticated: true,
					token: data.token
				});

			}, (error: HttpErrorResponse) => {
				observer.error({
					authenticated: false,
					errorCode: error.status,
					errorMessage: error.message
				});

			}, () => {
				observer.complete();
			});
		});
	}

	public logout() {
		console.log("logout");
		localStorage.removeItem("token");
		this.router.navigate([AdminRoutes.RELATIVE, AdminRoutes.LOGIN]);
	}
}
