"use client";

export default function Title({ params }: { params: { slug: number[] } }) {
	console.log("Title Rendered");

	const bookSlug = params?.slug?.[0];

	if (bookSlug) {
		return <div>Book {bookSlug}</div>;
	} else {
		return <div>Select your book</div>;
	}
}
