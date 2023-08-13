'use client';
import { useEffect, useState } from 'react';
import { useInterval, useTimeout } from 'usehooks-ts';

interface Props {
	messages: string[];
	delay?: number;
	intermessageDelay?: number;
	onComplete?: () => void;
}

export default
function RevealText(props: Props) {
	const {
		messages,
		delay = 100,
		intermessageDelay = 1500,
		onComplete,
	} = props;
	const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
	const [revealedCharacterCount, setRevealedCharacterCount] = useState(0);
	const currentMessage = messages[currentMessageIndex];
	const isLastMessage = currentMessageIndex === messages.length - 1;
	const currentMessageIsPlaying = revealedCharacterCount < currentMessage.length;
	const isPlaying = currentMessageIsPlaying || !isLastMessage;

	useEffect(() => {
		if(!isPlaying) onComplete?.();
	}, [isPlaying]);

	useInterval(
		() => setRevealedCharacterCount(revealedCharacterCount + 1),
		currentMessageIsPlaying ? delay : null,
	);

	useTimeout(() => {
		if(isLastMessage) {
			return;
		}
		setRevealedCharacterCount(0);
		setCurrentMessageIndex(currentMessageIndex + 1);
	}, !currentMessageIsPlaying ? intermessageDelay : null);

	return (
		<>
			{currentMessage.slice(0, revealedCharacterCount)}
		</>
	);
}
