import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import * as _ from "lodash";

declare module BitBucketApi {

	export interface Self {
		href: string;
	}

	export interface DownloadLink {
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

	export interface Build {
		name: string;
		links: DownloadLink;
		downloads: number;
		created_on: Date;
		user: User;
		type: string;
		size: number;
	}

	export interface Response {
		pagelen: number;
		values: Build[];
		page: number;
		size: number;
	}

}

class ElevateBuildModel {
	public date: Date;
	public branch: string;
	public version: string;
	public channel: string;
	public commitShort: string;
	public size: number;
	public downloadCount: number;
	public downloadLink: string;
}

@Component({
	selector: "app-continuous-integration-builds",
	templateUrl: "./continuous-integration-builds.component.html",
	styleUrls: ["./continuous-integration-builds.component.scss"]
})
export class ContinuousIntegrationBuildsComponent implements OnInit {

	public static readonly CONTINUOUS_INTEGRATION_BUILDS_URL: string = "https://api.bitbucket.org/2.0/repositories/thomaschampagne/elevate-ci-builds/downloads";

	public static readonly COLUMN_DATE: string = "date";
	public static readonly COLUMN_BRANCH: string = "branch";
	public static readonly COLUMN_VERSION: string = "version";
	public static readonly COLUMN_CHANNEL: string = "channel";
	public static readonly COLUMN_COMMITSHORT: string = "commitShort";
	public static readonly COLUMN_SIZE: string = "size";
	public static readonly COLUMN_DOWNLOAD_COUNT: string = "downloadCount";
	public static readonly COLUMN_DOWNLOAD_LINK: string = "downloadLink";

	public readonly displayedColumns: string[] = [
		ContinuousIntegrationBuildsComponent.COLUMN_DATE,
		ContinuousIntegrationBuildsComponent.COLUMN_BRANCH,
		ContinuousIntegrationBuildsComponent.COLUMN_VERSION,
		ContinuousIntegrationBuildsComponent.COLUMN_CHANNEL,
		ContinuousIntegrationBuildsComponent.COLUMN_COMMITSHORT,
		ContinuousIntegrationBuildsComponent.COLUMN_SIZE,
		ContinuousIntegrationBuildsComponent.COLUMN_DOWNLOAD_COUNT,
		ContinuousIntegrationBuildsComponent.COLUMN_DOWNLOAD_LINK,
	];

	public dataSource: MatTableDataSource<ElevateBuildModel>;

	@ViewChild(MatPaginator)
	public matPaginator: MatPaginator;

	@ViewChild(MatSort)
	public matSort: MatSort;

	constructor(public httpClient: HttpClient) {
	}

	public ngOnInit(): void {

		this.dataSource = new MatTableDataSource<ElevateBuildModel>();
		this.httpClient.get(ContinuousIntegrationBuildsComponent.CONTINUOUS_INTEGRATION_BUILDS_URL).subscribe((response: BitBucketApi.Response) => {

			this.dataSource.data = this.generatedData(response);
		});
	}

	public generatedData(bitBucketResponse: BitBucketApi.Response): ElevateBuildModel[] {
		const elevateBuildModels: ElevateBuildModel[] = [];
		_.forEach(bitBucketResponse.values, (bitBucketBuild: BitBucketApi.Build) => {
			elevateBuildModels.push(this.parseBitBucketBuild(bitBucketBuild));
		});
		return elevateBuildModels;
	}

	/**
	 *
	 * @param bitBucketBuild
	 */
	public parseBitBucketBuild(bitBucketBuild: BitBucketApi.Build): ElevateBuildModel {

		let splitParser = bitBucketBuild.name.split("_");
		const version = splitParser[0];
		const channel = splitParser[1];
		splitParser = splitParser[2].split(".");
		const branch = splitParser[1];
		const commitShort = splitParser[2];

		return {
			date: new Date(bitBucketBuild.created_on),
			branch: branch,
			commitShort: commitShort,
			version: version,
			channel: channel,
			size: _.round(bitBucketBuild.size / (1024 * 1024), 2),
			downloadCount: bitBucketBuild.downloads,
			downloadLink: bitBucketBuild.links.self.href
		};
	}

	public onOpenUrl(downloadLink: string): void {
		window.open(downloadLink, "_blank");
	}
}
