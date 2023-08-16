import './globals.css';

import { Container } from '@styled-system/jsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import H1 from '@/components/theme/h1';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'SimpleVideoMaker',
	description: 'Just a simple video maker.',
};

export default function RootLayout({ children }: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Container paddingBottom={5}>
					<H1>
						Simple Video Maker
					</H1>
				</Container>
				<Container>
					{children}
				</Container>
			</body>
		</html>
	);
}
