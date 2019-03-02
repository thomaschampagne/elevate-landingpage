import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IStats } from "../../services/api.service";
import { MatSnackBar } from "@angular/material";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.scss"]
})

export class DashboardComponent implements OnInit {

	constructor(private route: ActivatedRoute, private snackBar: MatSnackBar) {
	}

	private _stats: IStats;

	get stats(): IStats {
		return this._stats;
	}

	public ngOnInit(): void {

		this.route.data.subscribe((data: { stats: IStats }) => {
			this._stats = data.stats;
		}, (error: Error) => {
			this.snackBar.open("Error occured: " + error.message);
		});
	}
}
