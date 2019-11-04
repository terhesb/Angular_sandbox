import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorService } from './author.service';
import { StarComponent } from './star/star.component';

@NgModule({
	declarations: [
		AppComponent,
		AuthorsComponent,
		StarComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [AuthorService],
	bootstrap: [AppComponent]
})
export class AppModule { }
