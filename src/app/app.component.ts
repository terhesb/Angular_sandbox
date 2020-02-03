import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Angular';
	tweet = {
		isLiked: true,
		likesCount: 5
	}
	zippies = [
		{heading: "FirstHead", body: ["FirstBody", "FirstBody", "FirstBody"]},
		{heading: "SecondHead", body: ["SecondBody", "Balazs", "Proba", "..."]},
	]
}
