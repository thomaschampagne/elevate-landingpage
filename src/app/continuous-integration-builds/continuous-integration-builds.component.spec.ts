import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ContinuousIntegrationBuildsComponent } from "./continuous-integration-builds.component";

describe("ContinuousIntegrationBuildsComponent", () => {
	let component: ContinuousIntegrationBuildsComponent;
	let fixture: ComponentFixture<ContinuousIntegrationBuildsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ContinuousIntegrationBuildsComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContinuousIntegrationBuildsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
