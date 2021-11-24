import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-discord",
	template: "",
	styles: []
})
export class DiscordComponent implements OnInit {

	private static readonly DISCORD_INVITE_LINK = "https://discord.com/invite/W4G4e5guPV";

	constructor() {
	}

	ngOnInit() {
		window.location.href = DiscordComponent.DISCORD_INVITE_LINK;
	}

}
