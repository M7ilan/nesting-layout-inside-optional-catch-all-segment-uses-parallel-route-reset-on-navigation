"use client";

import clsx from "clsx";
import Link from "next/link";

export default function Books({ params }: { params: { slug: number[] } }) {
	console.log("Books Rendered");

	const bookSlug = params?.slug?.[0];

	const books = [1, 2, 3, 4];

	return (
		<div className="grid grid-rows-flow gap-2">
			{books.map((book) => (
				<Link key={book} href={`/route/${book}`} className={clsx("btn", { active: book == bookSlug })}>
					{`Book ${book}`}
				</Link>
			))}
		</div>
	);
}
