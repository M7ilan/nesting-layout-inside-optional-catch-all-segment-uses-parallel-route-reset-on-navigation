import Description from "@/components/description";

type Props = {
	Title: React.ReactNode;
	Books: React.ReactNode;
	Records: React.ReactNode;
	Content: React.ReactNode;
};

export default function Layout({ Title, Books, Records, Content }: Props) {
	return (
		<div className="mx-8 my-4 grid grid-rows-[min-content,1fr] gap-2">
			<div className="border-b pb-2">{Title}</div>
			<div className="grid grid-cols-3 gap-4 text-center">
				<div>{Books}</div>
				<div>{Records}</div>
				<div>{Content}</div>
			</div>
			<Description />
		</div>
	);
}
