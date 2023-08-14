import Foo from '@/components/foo';
import { Center } from '@styled-system/jsx';

export default function Home() {
	return (
		<div>
			<Center flexDir="column">
				<Foo />
			</Center>
		</div>
	);
}
