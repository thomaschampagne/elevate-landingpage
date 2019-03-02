import { Component, Input, OnInit } from "@angular/core";
import { IVersion } from "../../../services/api.service";
import * as _ from "lodash";

@Component({
	selector: "app-versions-chart",
	templateUrl: "./versions-chart.component.html",
	styleUrls: ["./versions-chart.component.css"]
})
export class VersionsChartComponent implements OnInit {

	constructor() {
	}

	@Input("versions")
	private _versions: IVersion[];

	get versions(): IVersion[] {
		return this._versions;
	}

	private _labels: string[];

	get labels(): string[] {
		return this._labels;
	}

	private _chartData: number[];

	get chartData(): number[] {
		return this._chartData;
	}

	private _chartType = "doughnut";

	get chartType(): string {
		return this._chartType;
	}

	private _options: any = {
		responsive: true,
		maintainAspectRatio: false
	};

	get options(): any {
		return this._options;
	}

	public ngOnInit() {
		this.setup();
	}

	public chartClicked(e: any): void {
		console.log(e);
	}

	public chartHovered(e: any): void {
		console.log(e);
	}

	private setup() {
		const chartLabels: string[] = [];
		const chartData: number[] = [];
		_.forEach(this._versions, (version: IVersion) => {
			chartLabels.push(version.version);
			chartData.push(version.count);
		});

		this._labels = chartLabels;
		this._chartData = chartData;
	}
}
