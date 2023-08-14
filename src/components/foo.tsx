'use client';

import { useState } from 'react';
import Bar from './bar';
import { css } from '@styled-system/css';

export default
function Foo() {
	const [started, setStarted] = useState(false);

	return (
		<>
			<button
				onClick={() => setStarted(true)} disabled={started}
				className={css({
					border: '1px solid black',
					backgroundColor: 'lightgray',
					cursor: 'pointer',
				})}
			>
				Generate
			</button>
			{started && (
				<Bar
					onComplete={() => setStarted(false)}
					messages={[
						'Yet another test...',
						'The first test required making a local pass with ffmpeg to properly set the duration of the video.',
						'This video did not require that extra pass and was made entirely in the browser.',
					]}
				/>
			)}
		</>
	);
}
