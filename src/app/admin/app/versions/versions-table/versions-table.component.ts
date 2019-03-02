import { Component, Input, OnInit } from "@angular/core";
import { IVersion } from "../../../services/api.service";
import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { Observable, of } from "rxjs";

@Component({
	selector: "app-versions-table",
	templateUrl: "./versions-table.component.html",
	styleUrls: ["./versions-table.component.css"]
})
export class VersionsTableComponent implements OnInit {

	constructor() {
	}

	@Input("versions")
	private _versions: IVersion[];

	get versions(): IVersion[] {
		return this._versions;
	}

	private _versionsDataSource: VersionsDataSource;

	get versionsDataSource(): VersionsDataSource {
		return this._versionsDataSource;
	}

	private _displayedColumns: string[] = ["version", "count", "percent"];

	get displayedColumns(): string[] {
		return this._displayedColumns;
	}

	public ngOnInit() {
		this._versionsDataSource = new VersionsDataSource(this._versions);
	}
}

export class VersionsDataSource extends DataSource<IVersion> {

	constructor(private versions: IVersion[]) {
		super();
	}

	connect(collectionViewer: CollectionViewer): Observable<IVersion[]> {
		return of(this.versions);
	}

	disconnect(collectionViewer: CollectionViewer): void {
	}
}
