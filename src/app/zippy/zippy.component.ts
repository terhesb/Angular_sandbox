import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-zippy',
	templateUrl: './zippy.component.html',
	styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {

	@Input('isExpanded') isExpanded: boolean;

	constructor() { 
		this.isExpanded = false;
	}

	expand(){
		this.isExpanded = !this.isExpanded;
	}

}
