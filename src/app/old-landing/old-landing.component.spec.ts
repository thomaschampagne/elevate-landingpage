import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { OldLandingComponent } from "./old-landing.component";

describe("OldLandingComponent", () => {
	let component: OldLandingComponent;
	let fixture: ComponentFixture<OldLandingComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [OldLandingComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(OldLandingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
