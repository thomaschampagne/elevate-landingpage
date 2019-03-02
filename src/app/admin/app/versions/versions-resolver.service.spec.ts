import { inject, TestBed } from "@angular/core/testing";

import { VersionsResolverService } from "./versions-resolver.service";

describe("VersionsResolverService", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [VersionsResolverService]
		});
	});

	it("should be created", inject([VersionsResolverService], (service: VersionsResolverService) => {
		expect(service).toBeTruthy();
	}));
});
