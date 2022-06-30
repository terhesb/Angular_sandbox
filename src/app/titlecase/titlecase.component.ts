import { Component } from '@angular/core';

@Component({
	selector: 'app-titlecase',
	templateUrl: './titlecase.component.html',
	styleUrls: ['./titlecase.component.css']
})
export class TitlecaseComponent {

	correctedTitle: string;
	numberOfChars: number;

	constructor() { }

	private preposition = ["of", "the"];

	print(title: string) {
		let words = title.split(" ");

		for (let i = 0; i < words.length; i++) {
			let word = words[i];
			word = word.toLowerCase();
			if (this.preposition.includes(word)) {
				if (i === 0) {
					word = this.firstCharUpperCase(word);
				}
			} else {
				word = this.firstCharUpperCase(word);
			}
			words[i] = word;
		}
		this.correctedTitle = words.join(" ");
	}

	firstCharUpperCase(word: string): string {
		return word.charAt(0).toUpperCase() + word.substring(1);
	}

}
