import { Component } from '@angular/core';

@Component({
	selector: 'app-star',
	templateUrl: './star.component.html',
	styleUrls: ['./star.component.scss']
})
export class StarComponent {

	private star: boolean;

	constructor() {
		this.star = false;
	}

	onClick() {
		this.star = !this.star;
	}

}
