import { inject, TestBed } from "@angular/core/testing";

import { AudienceResolverService } from "./audience-resolver.service";

describe("AudienceResolverService", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [AudienceResolverService]
		});
	});

	it("should be created", inject([AudienceResolverService], (service: AudienceResolverService) => {
		expect(service).toBeTruthy();
	}));
});
