import { Component, Input, Output } from '@angular/core';

@Component({
	selector: 'app-like',
	templateUrl: './like.component.html',
	styleUrls: ['./like.component.css']
})
export class LikeComponent {

	@Input('active') active: boolean;
	@Input('likesCount') likesCount: number;

	onClick() {
		this.active = !this.active;
		if (this.active)
			this.likesCount++;
		else
			this.likesCount--;
	}
}
