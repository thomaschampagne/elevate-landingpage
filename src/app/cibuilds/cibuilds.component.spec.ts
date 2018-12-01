import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CIBuildsComponent } from "./cibuilds.component";

describe("CIBuildsComponent", () => {
	let component: CIBuildsComponent;
	let fixture: ComponentFixture<CIBuildsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CIBuildsComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CIBuildsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
