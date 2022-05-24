import { Component } from '@angular/core';

@Component({
	selector: 'app-star',
	templateUrl: './star.component.html',
	styleUrls: ['./star.component.css']
})
export class StarComponent {

	star: boolean;

	constructor() {
		this.star = false;
	}

	onClick() {
		this.star = !this.star;
	}

}
