import { Component, OnInit } from "@angular/core";
import { IPro } from "../../services/api.service";
import { MatSnackBar } from "@angular/material";
import { ActivatedRoute } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
	selector: "app-pros",
	templateUrl: "./pros.component.html",
	styleUrls: ["./pros.component.scss"]
})
export class ProsComponent implements OnInit {

	constructor(private route: ActivatedRoute, private snackBar: MatSnackBar) {
	}

	private _pros: IPro[];

	get pros(): IPro[] {
		return this._pros;
	}

	public ngOnInit() {
		this.route.data.subscribe((data: { pros: IPro[] }) => {
			this._pros = data.pros;
		}, (error: HttpErrorResponse) => {
			this.snackBar.open("Error occured: " + error.message);
		});
	}

	public onClick(pro: IPro): void {
		window.open("https://www.strava.com/athletes/" + pro.stravaId, "_blank");
	}
}
