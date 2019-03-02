import { Component, OnInit, VERSION } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
	selector: "app-about",
	templateUrl: "./about.component.html",
	styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {

	private _version: string;

	constructor(private dialogRef: MatDialogRef<AboutComponent>) {
	}

	ngOnInit() {
		this._version = VERSION.full;
	}

	closeDialog() {
		this.dialogRef.close();
	}

	get version(): string {
		return this._version;
	}
}
