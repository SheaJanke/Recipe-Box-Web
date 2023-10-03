import type { User } from 'firebase/auth';
import { writable } from 'svelte/store';
import type { Recipe } from './types';

export const recipeStore = writable<Recipe[] | undefined>();
export const userStore = writable<User | null>();
