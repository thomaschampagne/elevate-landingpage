import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IAudience } from "../../services/api.service";
import { HttpErrorResponse } from "@angular/common/http";
import { MatSnackBar } from "@angular/material";

@Component({
	selector: "app-audience",
	templateUrl: "./audience.component.html",
	styleUrls: ["./audience.component.scss"]
})
export class AudienceComponent implements OnInit {

	private _audience: IAudience;

	constructor(private route: ActivatedRoute, private snackBar: MatSnackBar) {
	}

	public ngOnInit() {

		this.route.data.subscribe((data: { audience: IAudience }) => {
			this._audience = data.audience;
		}, (error: HttpErrorResponse) => {
			this.snackBar.open("Error occured: " + error.message);
		});
	}

	get audience(): IAudience {
		return this._audience;
	}
}
