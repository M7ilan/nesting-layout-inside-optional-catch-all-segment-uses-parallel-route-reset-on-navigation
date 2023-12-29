import Link from "next/link";

export default function Description() {
	return (
		<div className="my-8">
			<Link href="https://github.com/vercel/next.js/issues/" className="text-blue-500">
				Issue Description
			</Link>
			<div className="text-xs italic">
				<div>
					The problem is that the whole <code>app\route\[[...slug]]\layout.tsx</code> re-render when you click any book or record.
				</div>
				<div>1. Open the console</div>
				<div>2. Click a book or record.</div>
				<div>3. If the console log this on one click:</div>
				<code className="inline-block p-2 rounded my-1">
					<div>Title Rendered</div>
					<div>Books Rendered</div>
					<div>Records Rendered</div>
					<div>Content Rendered</div>
				</code>
				<div>That mean the whole layout re-rendered/reset which is a problem.</div>
			</div>
		</div>
	);
}
