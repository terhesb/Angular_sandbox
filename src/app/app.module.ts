import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorService } from './author.service';
import { StarComponent } from './star/star.component';
import { TitlecaseComponent } from './titlecase/titlecase.component';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { FirstFormComponent } from './first-form/first-form.component';
import { FirstCharactersPipe } from './titlecase/firstCharacters.pipe';

@NgModule({
	declarations: [
		AppComponent,
		AuthorsComponent,
		StarComponent,
		TitlecaseComponent,
		LikeComponent,
		ZippyComponent,
		FirstFormComponent,
		FirstCharactersPipe
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule
	],
	providers: [AuthorService],
	bootstrap: [AppComponent]
})
export class AppModule { }
