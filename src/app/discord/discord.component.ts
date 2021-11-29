import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-discord",
	template: "",
	styles: []
})
export class DiscordComponent implements OnInit {

	private static readonly DISCORD_INVITE_LINK = "https://discord.com/invite/N6BAVbBpS2";

	constructor() {
	}

	ngOnInit() {
		window.location.href = DiscordComponent.DISCORD_INVITE_LINK;
	}

}
