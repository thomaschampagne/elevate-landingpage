import { NgModule } from "@angular/core";
import {
	MatButtonModule,
	MatCardModule,
	MatDialogModule,
	MatIconModule,
	MatInputModule,
	MatPaginatorModule,
	MatSelectModule,
	MatSnackBarModule,
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
		MatSnackBarModule,
		MatCardModule,
		MatSelectModule
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
		MatSnackBarModule,
		MatCardModule,
		MatSelectModule
	],
	providers: [
		PathLocationStrategy
	],
	declarations: []
})

export class MaterialModule {
}
