"use client";

export default function Content({ params }: { params: { slug: number[] } }) {
	console.log("Content Rendered");

	const bookSlug = params?.slug?.[0];
	const recordSlug = params?.slug?.[1];

	if (bookSlug && recordSlug) {
		return (
			<div>
				<div>Book {bookSlug}</div>
				<div>Record {recordSlug}</div>
			</div>
		);
	} else {
		return <div>Select your record</div>;
	}
}
