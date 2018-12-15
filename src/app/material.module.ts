import { NgModule } from "@angular/core";
import {
	MatButtonModule,
	MatCardModule,
	MatDialogModule,
	MatIconModule,
	MatInputModule,
	MatPaginatorModule,
	MatSelectModule,
	MatSortModule,
	MatTableModule
} from "@angular/material";
import { PathLocationStrategy } from "@angular/common";

@NgModule({
	imports: [
		MatIconModule,
		MatButtonModule,
		MatSelectModule,
		MatInputModule,
		MatDialogModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatCardModule
	],
	exports: [
		MatIconModule,
		MatButtonModule,
		MatSelectModule,
		MatInputModule,
		MatDialogModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatCardModule
	],
	providers: [
		PathLocationStrategy
	],
	declarations: []
})

export class MaterialModule {
}
