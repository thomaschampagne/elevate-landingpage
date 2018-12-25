import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MatPaginator, MatSnackBar, MatSort, MatTableDataSource } from "@angular/material";
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

	public static readonly LAST_100_CI_BUILDS_URL: string = "https://api.bitbucket.org/2.0/repositories/thomaschampagne/elevate-ci-builds/downloads?pagelen=100";

	public static readonly COLUMN_DATE: string = "date";
	public static readonly COLUMN_BRANCH: string = "branch";
	public static readonly COLUMN_VERSION: string = "version";
	public static readonly COLUMN_CHANNEL: string = "channel";
	public static readonly COLUMN_COMMIT_SHORT: string = "commitShort";
	public static readonly COLUMN_SIZE: string = "size";
	public static readonly COLUMN_DOWNLOAD_COUNT: string = "downloadCount";
	public static readonly COLUMN_DOWNLOAD_LINK: string = "downloadLink";

	public readonly displayedColumns: string[] = [
		ContinuousIntegrationBuildsComponent.COLUMN_DATE,
		ContinuousIntegrationBuildsComponent.COLUMN_BRANCH,
		ContinuousIntegrationBuildsComponent.COLUMN_VERSION,
		ContinuousIntegrationBuildsComponent.COLUMN_CHANNEL,
		ContinuousIntegrationBuildsComponent.COLUMN_COMMIT_SHORT,
		ContinuousIntegrationBuildsComponent.COLUMN_SIZE,
		ContinuousIntegrationBuildsComponent.COLUMN_DOWNLOAD_COUNT,
		ContinuousIntegrationBuildsComponent.COLUMN_DOWNLOAD_LINK,
	];

	public dataSource: MatTableDataSource<ElevateBuildModel>;

	@ViewChild(MatPaginator)
	public matPaginator: MatPaginator;

	@ViewChild(MatSort)
	public matSort: MatSort;

	public selectedBranch: string;
	public allBranches: string[];

	public selectedVersion: string;
	public allVersions: string[];

	constructor(public httpClient: HttpClient,
				public snackBar: MatSnackBar) {
		this.allBranches = [];
		this.allVersions = [];
	}

	public ngOnInit(): void {

		this.dataSource = new MatTableDataSource<ElevateBuildModel>();
		this.dataSource.paginator = this.matPaginator;
		this.dataSource.sort = this.matSort;

		const httpHeaders: HttpHeaders = new HttpHeaders({
			"Content-Type": "application/json",
		});

		const subscription = this.httpClient.get(ContinuousIntegrationBuildsComponent.LAST_100_CI_BUILDS_URL,
			{headers: httpHeaders}).subscribe((response: BitBucketApi.Response) => {

			const elevateBuildModels = this.generatedData(response);

			this.allBranches = _.uniqBy(elevateBuildModels, "branch").map(model => {
				return model.branch;
			});

			this.allVersions = _.uniqBy(elevateBuildModels, "version").map(model => {
				return model.version;
			});

			this.dataSource.data = elevateBuildModels;

		}, error => {
			this.snackBar.open("Whoops an error occured. Come back later...");
			console.error(error);
		}, () => subscription.unsubscribe());

		this.dataSource.filterPredicate = (model: ElevateBuildModel, filter: string) => {
			return ((model.branch + model.version).match(new RegExp(filter, "gi")) !== null);
		};
	}

	public generatedData(bitBucketResponse: BitBucketApi.Response): ElevateBuildModel[] {
		const elevateBuildModels: ElevateBuildModel[] = [];
		_.forEach(bitBucketResponse.values, (bitBucketBuild: BitBucketApi.Build) => {
			elevateBuildModels.push(ContinuousIntegrationBuildsComponent.parseBitBucketBuild(bitBucketBuild));
		});
		return elevateBuildModels;
	}

	public onSelectedBranchChange(): void {
		this.applyFilter();
	}

	public onSelectedVersionChange(): void {
		this.applyFilter();
	}

	public applyFilter(): void {
		this.dataSource.filter = ((this.selectedBranch ? this.selectedBranch : "") + (this.selectedVersion ? this.selectedVersion : ""));
	}

	/**
	 *
	 * @param bitBucketBuild
	 */
	public static parseBitBucketBuild(bitBucketBuild: BitBucketApi.Build): ElevateBuildModel {

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
			version: version.replace("v", ""),
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
