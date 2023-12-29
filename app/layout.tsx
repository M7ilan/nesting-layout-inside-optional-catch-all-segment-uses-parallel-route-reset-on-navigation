import "./globals.css";

export default function RootLayout({ children }) {
	return (
		<html>
			<head />
			<body className="bg-black text-white">{children}</body>
		</html>
	);
}
