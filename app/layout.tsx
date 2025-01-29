import { Metadata } from 'next';

import './globals.scss';

export const metadata: Metadata = {
	title: 'Marwan Z.',
	description: 'Personal website',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
