/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

export interface Link {
	label: string;
	url: string;
}

export interface RichText {
	tag: string;
	content: string;
}

export interface Book {
	title: string;
	releaseYear: number;
	pages: number;
	isbn: string;
	synopsis: RichText[];
	image: string;
	alt: string;
}
