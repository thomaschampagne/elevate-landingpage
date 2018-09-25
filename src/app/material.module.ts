import { NgModule } from "@angular/core";
import { MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatSelectModule } from "@angular/material";
import { PathLocationStrategy } from "@angular/common";

@NgModule({
	imports: [
		MatIconModule,
		MatButtonModule,
		MatSelectModule,
		MatInputModule,
		MatDialogModule
	],
	exports: [
		MatIconModule,
		MatButtonModule,
		MatSelectModule,
		MatInputModule,
		MatDialogModule
	],
	providers: [
		PathLocationStrategy
	],
	declarations: []
})

export class MaterialModule {
}
