import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: 'firstCharacters'
})
export class FirstCharactersPipe implements PipeTransform {

	transform(value: string, limit?: number, ...args: any[]) {
		if(!value)
			return null;

		if(limit)
			return value.substring(0, limit) + (value.length > limit ? ' ...' : '');
		else
			return value;
	}
}