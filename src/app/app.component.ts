import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { MatDialog, MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { PathLocationStrategy } from "@angular/common";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {

	constructor(public iconRegistry: MatIconRegistry,
				public sanitizer: DomSanitizer,
				public pathLocationStrategy: PathLocationStrategy,
				public dialog: MatDialog) {
	}

	public static readonly ELEVATE_WEBSITE = "https://thomaschampagne.github.io/elevate/";
	public static readonly ICONS_REGISTERED = ["twitter", "facebook", "github", "chrome", "opera", "firefox"];
	public static readonly OLD_WEBSITE_BASE_HREF: string = "/stravistix/";

	public readonly DEFAULT_DONATION_AMOUNT: number = 25;
	public readonly DEFAULT_DONATION_CURRENCY: string = "USD";
	public readonly CURRENCIES: string [] = ["AUD", "BRL", "CAD", "CHF", "CZK", "DKK", "EUR", "GBP", "HKD", "HUF", "ILS", "JPY", "MXN", "NOK", "NZD", "PHP", "PLN", "RUB", "SEK", "SGD", "THB", "TWD", "USD"];

	public platform: string = null;
	public showOperaInstallSteps = false;
	public isForward: boolean = null;
	public forwardCountDown = 9;

	@ViewChild("fitnessTrend")
	public fitnessTrendElement: ElementRef;

	@ViewChild("donate")
	public donateElement: ElementRef;

	@ViewChild("download")
	public downloadElement: ElementRef;

	@ViewChild("operaInstall")
	public operaInstallElement: ElementRef;

	@ViewChild("firefoxNoteDialog")
	public firefoxNoteDialog: TemplateRef<this>;

	public ngOnInit(): void {

		this.handleForward();

		this.platform = window.navigator.platform;

		AppComponent.ICONS_REGISTERED.forEach((iconName: string) => {
			this.iconRegistry.addSvgIcon(iconName, this.sanitizer.bypassSecurityTrustResourceUrl("./assets/icons/" + iconName + ".svg"));
		});
	}

	private handleForward(): void {

		this.isForward = (this.pathLocationStrategy.getBaseHref() === AppComponent.OLD_WEBSITE_BASE_HREF);

		if (this.isForward) {

			const intervalId = setInterval(() => {

				this.forwardCountDown--;

				if (this.forwardCountDown <= 0) {
					clearInterval(intervalId);
					window.location.href = AppComponent.ELEVATE_WEBSITE;
				} else {

				}
			}, 1000);
		}
	}

	public goToElement(elementRef: ElementRef) {
		window.scroll({
			top: elementRef.nativeElement.offsetTop,
			left: 0,
			behavior: "smooth"
		});
	}

	public openUrl(url: string, target?: string): void {
		window.open(url, (target) ? target : "_blank");
	}

	public onGoToDownloadClicked(): void {
		this.goToElement(this.downloadElement);
	}

	public onNextClicked(): void {
		this.goToElement(this.fitnessTrendElement);
	}

	public onDonateClicked(): void {
		this.goToElement(this.donateElement);
	}

	public onTwitterClicked(): void {
		this.openUrl("https://twitter.com/champagnethomas");
	}

	public onFacebookClicked(): void {
		this.openUrl("https://www.facebook.com/elevateforstrava");
	}

	public onGithubClicked(): void {
		this.openUrl("https://github.com/thomaschampagne/elevate");
	}

	public onGoToNewSiteClicked(): void {
		this.openUrl(AppComponent.ELEVATE_WEBSITE, "_self");
	}

	public onChromeDownloadClicked(): void {
		this.openUrl("https://chrome.google.com/webstore/detail/elevate-for-strava/dhiaggccakkgdfcadnklkbljcgicpckn");
	}

	public onOperaDownloadClicked(): void {
		this.showOperaInstallSteps = true;
		setTimeout(() => this.goToElement(this.operaInstallElement));
	}

	public onFirefoxDownloadClicked(): void {
		this.dialog.open(this.firefoxNoteDialog, {
			width: "450px"
		});
	}
}
