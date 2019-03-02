import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./material.module";

@NgModule({
	imports: [
		FormsModule,
		HttpClientModule,
		MaterialModule,
	],
	exports: [
		FormsModule,
		HttpClientModule,
		MaterialModule,
	],
	declarations: []
})

export class SharedModule {
}
