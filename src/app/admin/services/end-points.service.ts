import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";

@Injectable()
export class EndPointsService {

	public getApiUrl() {
		return this.resolve(environment.api.url);
	}

	private resolve(url: string): string {
		const now: Date = new Date();
		const endPointId: number = this.endPointID(environment.api.totalEndpoints, now);
		return url.replace(environment.api.replacePattern, ("0" + endPointId).slice(-2));
	}

	private endPointID(serversInCluster: number, date: Date): number {
		const worldHour = parseInt(date.toISOString().split("T")[1].split(":")[0], 10);
		return Math.floor(worldHour / (24 / serversInCluster)) + 1;
	}
}
