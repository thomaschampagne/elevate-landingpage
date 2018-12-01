import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { MatDialog, MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
	selector: "app-landing",
	templateUrl: "./landing.component.html",
	styleUrls: ["./landing.component.scss"]
})
export class LandingComponent implements OnInit {

	constructor(public iconRegistry: MatIconRegistry,
				public sanitizer: DomSanitizer,
				public dialog: MatDialog) {
	}

	public static readonly ICONS_REGISTERED = ["twitter", "facebook", "github", "chrome", "opera", "firefox"];

	public readonly DEFAULT_DONATION_AMOUNT: number = 25;
	public readonly DEFAULT_DONATION_CURRENCY: string = "USD";
	public readonly CURRENCIES: string [] = ["AUD", "BRL", "CAD", "CHF", "CZK", "DKK", "EUR", "GBP", "HKD", "HUF", "ILS", "JPY", "MXN", "NOK", "NZD", "PHP", "PLN", "RUB", "SEK", "SGD", "THB", "TWD", "USD"];

	public platform: string = null;
	public showOperaInstallSteps = false;
	public isForward: boolean = null;

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

		this.platform = window.navigator.platform;

		LandingComponent.ICONS_REGISTERED.forEach((iconName: string) => {
			this.iconRegistry.addSvgIcon(iconName, this.sanitizer.bypassSecurityTrustResourceUrl("./assets/icons/" + iconName + ".svg"));
		});
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
		this.openUrl("https://www.facebook.com/elevatestrava");
	}

	public onGithubClicked(): void {
		this.openUrl("https://github.com/thomaschampagne/elevate");
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
