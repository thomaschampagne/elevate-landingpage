import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { VersionsChartComponent } from "./versions-chart.component";

describe("VersionsChartComponent", () => {
	let component: VersionsChartComponent;
	let fixture: ComponentFixture<VersionsChartComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [VersionsChartComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(VersionsChartComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should be created", () => {
		expect(component).toBeTruthy();
	});
});
