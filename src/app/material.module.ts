import { NgModule } from "@angular/core";
import {
	MatButtonModule,
	MatCardModule,
	MatDialogModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatSelectModule,
	MatSidenavModule,
	MatSnackBarModule,
	MatSortModule,
	MatTableModule,
	MatToolbarModule
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
		MatProgressBarModule,
		MatMenuModule,
		MatToolbarModule,
		MatSidenavModule,
		MatListModule
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
		MatProgressBarModule,
		MatMenuModule,
		MatToolbarModule,
		MatSidenavModule,
		MatListModule
	],
	providers: [
		PathLocationStrategy
	],
	declarations: []
})

export class MaterialModule {
}
