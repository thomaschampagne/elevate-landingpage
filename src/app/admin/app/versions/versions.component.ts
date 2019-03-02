import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IVersion } from "../../services/api.service";
import { HttpErrorResponse } from "@angular/common/http";
import { MatSnackBar } from "@angular/material";
import * as _ from "lodash";
import { environment } from "../../../../environments/environment";

@Component({
	selector: "app-versions",
	templateUrl: "./versions.component.html",
	styleUrls: ["./versions.component.css"]
})

export class VersionsComponent implements OnInit {

	private _versions: IVersion[];

	constructor(private route: ActivatedRoute, private snackBar: MatSnackBar) {
	}


	public ngOnInit() {

		this.route.data.subscribe((data: { versions: IVersion[] }) => {

			this._versions = _.filter(data.versions, (item: IVersion) => {
				return !item.version.startsWith("preview");
			}).slice(0, environment.limitVersions);

		}, (error: HttpErrorResponse) => {
			this.snackBar.open("Error occured: " + error.message);
		});
	}

	get versions(): IVersion[] {
		return this._versions;
	}
}
