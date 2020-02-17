import { Component } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';

@Component({
	selector: 'app-first-form',
	templateUrl: './first-form.component.html',
	styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent {

	mlength: number = 3;
	focusedCourse: boolean = false;
	focusedCategory: boolean = false;
	cousrseName: string = "Course name"
	categoryName: string = "Category";

	categories = [
		{ id: 1, name: 'Development' },
		{ id: 2, name: 'Art' },
		{ id: 3, name: 'Languages' },
	];

	submit(f: NgForm): void {
		console.log(f.value);
	}

}
