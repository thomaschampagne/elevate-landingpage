import { inject, TestBed } from "@angular/core/testing";

import { ProsResolverService } from "./pros-resolver.service";

describe("ProsResolverService", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ProsResolverService]
		});
	});

	it("should be created", inject([ProsResolverService], (service: ProsResolverService) => {
		expect(service).toBeTruthy();
	}));
});
