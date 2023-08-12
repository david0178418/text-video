'use client';
import { useEffect, useState } from 'react';
import { useInterval } from 'usehooks-ts';

interface Props {
	children: string;
	delay?: number;
	onComplete?: () => void;
}

export default
function RevealText(props: Props) {
	const {
		children,
		delay = 100,
		onComplete,
	} = props;
	const [revealedCharacterCount, setRevealedCharacterCount] = useState(0);
	const isPlaying = revealedCharacterCount < children.length;

	useEffect(() => {
		if(!isPlaying) onComplete?.();
	}, [isPlaying]);

	useInterval(
		() => setRevealedCharacterCount(revealedCharacterCount + 1),
		isPlaying ? delay : null,
	);

	return (
		<>
			{children.slice(0, revealedCharacterCount)}
		</>
	);
}
