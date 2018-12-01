import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

declare module DownloadApiBitBucket {

	export interface Self {
		href: string;
	}

	export interface Links {
		self: Self;
	}

	export interface Self2 {
		href: string;
	}

	export interface Html {
		href: string;
	}

	export interface Avatar {
		href: string;
	}

	export interface Links2 {
		self: Self2;
		html: Html;
		avatar: Avatar;
	}

	export interface User {
		username: string;
		display_name: string;
		account_id: string;
		links: Links2;
		nickname: string;
		type: string;
		uuid: string;
	}

	export interface Value {
		name: string;
		links: Links;
		downloads: number;
		created_on: Date;
		user: User;
		type: string;
		size: number;
	}

	export interface Response {
		pagelen: number;
		values: Value[];
		page: number;
		size: number;
	}

}


@Component({
	selector: "app-cibuilds",
	templateUrl: "./cibuilds.component.html",
	styleUrls: ["./cibuilds.component.scss"]
})
export class CIBuildsComponent implements OnInit {

	public static readonly CI_BUILDS_URL: string = "https://api.bitbucket.org/2.0/repositories/thomaschampagne/elevate-ci-builds/downloads";

	constructor(public httpClient: HttpClient) {
	}

	public ngOnInit() {

		this.httpClient.get(CIBuildsComponent.CI_BUILDS_URL).subscribe((response: DownloadApiBitBucket.Response) => {
			console.log(response);
		});
	}

}
