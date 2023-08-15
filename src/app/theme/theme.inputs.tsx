import H1 from '@/components/theme/h1';
import H2 from '@/components/theme/h2';
import Input from '@/components/theme/text-input';
import { HStack } from '@styled-system/jsx';

export default
function InputTheme() {
	return (
		<>
			<H1>Input</H1>
			<H2>Default</H2>
			<HStack>
				<Input placeholder="Small" size="small" />
				<Input placeholder="Default" />
				<Input placeholder="Default" size="large" />
			</HStack>
		</>
	);
}
