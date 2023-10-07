import { v4 as uuidv4 } from 'uuid';

export interface Recipe {
	id: string;
	imgUrls: string[];
	name: string;
	notes: string;
	tags: string[];
}

export function createNewRecipe(): Recipe {
	return {
		id: uuidv4(),
		imgUrls: [],
		name: 'Untitled Recipe',
		notes: '',
		tags: []
	};
}
