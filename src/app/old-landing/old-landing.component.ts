import { Component, OnInit } from "@angular/core";
import { AppComponent } from "../app.component";
import { Router } from "@angular/router";

@Component({
	selector: "app-old-landing",
	templateUrl: "./old-landing.component.html",
	styleUrls: ["./old-landing.component.scss"]
})
export class OldLandingComponent implements OnInit {

	public forwardCountDown = 9;

	constructor(public router: Router) {
	}

	public ngOnInit() {
		this.handleForward();
	}

	private handleForward(): void {

		const intervalId = setInterval(() => {

			this.forwardCountDown--;

			if (this.forwardCountDown <= 0) {
				clearInterval(intervalId);
				this.router.navigateByUrl("landing");
				window.location.href = AppComponent.ELEVATE_WEBSITE;
			} else {

			}
		}, 1000);
	}

	public onGoToNewSiteClicked(): void {
		this.router.navigateByUrl("landing");
	}

}
