import { Component, OnInit } from "@angular/core";
import { Event, NavigationEnd, Router } from "@angular/router";
import * as _ from "lodash";
import { AuthenticationService } from "../services/authentication.service";
import { MatDialog } from "@angular/material";
import { AboutComponent } from "./about/about.component";

@Component({
	selector: "app-admin",
	templateUrl: "./admin-app.component.html",
	styleUrls: ["./admin-app.component.scss"]
})
export class AdminAppComponent implements OnInit {

	private _title: string;

	private static updateToolBarTitle(url: string): string {
		return _.upperFirst(_.last(_.split(url, "/")));
	}

	constructor(private router: Router, private authenticationService: AuthenticationService, public dialog: MatDialog) {
	}

	get title(): string {
		return this._title;
	}

	public ngOnInit() {

		this._title = AdminAppComponent.updateToolBarTitle(this.router.url);

		this.router.events.subscribe((routerEvent: Event) => {
			if (routerEvent instanceof NavigationEnd) {
				this._title = AdminAppComponent.updateToolBarTitle(routerEvent.url);
			}
		});
	}

	public logout() {
		this.authenticationService.logout();
	}

	public about() {

		let dialogRef = this.dialog.open(AboutComponent);

		dialogRef.afterClosed().subscribe(result => {
			console.log("The dialog was closed");
		});
	}
}
