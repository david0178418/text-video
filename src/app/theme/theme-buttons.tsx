import Button from '@/components/theme/button';
import H1 from '@/components/theme/h1';
import H2 from '@/components/theme/h2';
import { HStack } from '@styled-system/jsx';

export default
function ButtonsTheme() {
	return (
		<>
			<H1>
				Buttons
			</H1>
			<H2>
				Default
			</H2>
			<HStack>
				<Button size="small">
					Small
				</Button>
				<Button>
					Default
				</Button>
				<Button size="large">
					Large
				</Button>
			</HStack>
			<H2>
				Ghost
			</H2>
			<HStack>
				<Button variant="ghost" size="small">
					Small
				</Button>
				<Button variant="ghost">
					Ghost
				</Button>
				<Button variant="ghost" size="large">
					Large
				</Button>
			</HStack>
			<H2>
				Link
			</H2>
			<HStack>
				<Button variant="link" size="small">
					Small
				</Button>
				<Button variant="link">
					Link
				</Button>
				<Button variant="link" size="large">
					Large
				</Button>
			</HStack>
			<H2>
				Outline
			</H2>
			<HStack>
				<Button variant="outline" size="small">
					Small
				</Button>
				<Button variant="outline">
					Outline
				</Button>
				<Button variant="outline" size="large">
					Large
				</Button>
			</HStack>
			<H2>
				Soft
			</H2>
			<HStack>
				<Button variant="soft" size="small">
					Small
				</Button>
				<Button variant="soft">
					Soft
				</Button>
				<Button variant="soft" size="large">
					Large
				</Button>
			</HStack>
			<H2>
				White
			</H2>
			<HStack>
				<Button variant="white" size="small">
					Small
				</Button>
				<Button variant="white">
					White
				</Button>
				<Button variant="white" size="large">
					Large
				</Button>
			</HStack>
		</>
	);
}
