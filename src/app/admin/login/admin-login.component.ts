import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import * as _ from "lodash";
import { AuthenticationService, IAuthStatus } from "../services/authentication.service";
import { AdminRoutes } from "../admin.routes";

@Component({
	selector: "app-login",
	templateUrl: "./admin-login.component.html",
	styleUrls: ["./admin-login.component.scss"],
	providers: [AuthenticationService]
})
export class AdminLoginComponent implements OnInit {

	constructor(public router: Router,
				public authenticationService: AuthenticationService,
				public snackBar: MatSnackBar) {
	}

	public ngOnInit(): void {
	}

	public onLogin(login: string, password: string): void {

		if (_.isEmpty(login)) {
			this.snackBar.open("Empty login");
			return;
		}

		if (_.isEmpty(password)) {
			this.snackBar.open("Empty password");
			return;
		}

		// Login from backend
		this.authenticationService.login(login, password).subscribe((success: IAuthStatus) => {

			console.log("Authenticated, storing token", success);
			this.router.navigate([AdminRoutes.RELATIVE, AdminRoutes.APP]);

		}, (failure: IAuthStatus) => {

			let errorMessage = failure.errorMessage;

			// Override with known error code
			if (failure.errorCode === 401) {
				errorMessage = "Access is denied";
			}

			this.snackBar.open(errorMessage);
		});
	}
}
