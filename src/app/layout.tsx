import { Container } from '@styled-system/jsx';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { css } from '@styled-system/css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Text to video',
	description: 'Text to video',
};

export default function RootLayout({ children }: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className={css({ backgroundColor: 'darkgray' })}>
					<Container>
						<div className={css({
							fontSize: 48,
							fontWeight: 'bold',
						})}>
							Text to Video
						</div>
					</Container>
				</div>
				<Container>
					{children}
				</Container>
			</body>
		</html>
	);
}
