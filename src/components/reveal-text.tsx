'use client';
import { useState } from 'react';
import { useInterval } from 'usehooks-ts';

interface Props {
	children: string;
}

export default
function RevealText(props: Props) {
	const { children } = props;
	const [revealedCharacterCount, setRevealedCharacterCount] = useState(0);
	const isPlaying = revealedCharacterCount < children.length;

	useInterval(
		() => setRevealedCharacterCount(revealedCharacterCount + 1),
		isPlaying ? 100 : null,
	);

	return (
		<>
			{children.slice(0, revealedCharacterCount)}
		</>
	);
}
