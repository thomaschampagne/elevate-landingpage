import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { VersionsTableComponent } from "./versions-table.component";

describe("VersionsTableComponent", () => {
	let component: VersionsTableComponent;
	let fixture: ComponentFixture<VersionsTableComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [VersionsTableComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(VersionsTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should be created", () => {
		expect(component).toBeTruthy();
	});
});
