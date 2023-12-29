"use client";

import clsx from "clsx";
import Link from "next/link";

export default function Records({ params }: { params: { slug: number[] } }) {
	console.log("Records Rendered");

	const bookSlug = params?.slug?.[0] || 1;
	const recordSlug = params?.slug?.[1];

	const records = [1, 2, 3, 4];

	return (
		<div className="grid grid-rows-flow gap-2">
			{records.map((record) => (
				<Link key={record} href={`/route/${bookSlug}/${record}`} className={clsx("btn", { active: record == recordSlug })}>
					{`Record ${record}`}
				</Link>
			))}
		</div>
	);
}
