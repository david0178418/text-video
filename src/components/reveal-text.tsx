'use client';
import { useState } from 'react';
import { useInterval, useTimeout } from 'usehooks-ts';

interface Props {
	messages: string[];
	loop?: boolean;
	delay?: number;
	endMessageDelay?: number;
	intermessageDelay?: number;
	onComplete?: () => void;
}

export default
function RevealText(props: Props) {
	const {
		messages,
		delay = 100,
		intermessageDelay = 1500,
		endMessageDelay = intermessageDelay * 2,
		onComplete,
		loop = false,
	} = props;
	const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
	const [revealedCharacterCount, setRevealedCharacterCount] = useState(0);
	const currentMessage = messages[currentMessageIndex];
	const isLastMessage = currentMessageIndex === messages.length - 1;
	const currentMessageIsPlaying = revealedCharacterCount < currentMessage.length;
	const isPlaying = currentMessageIsPlaying || !isLastMessage;

	useInterval(() => {
		setRevealedCharacterCount(revealedCharacterCount + 1);
	}, currentMessageIsPlaying ? delay : null);

	useTimeout(() => {
		if(isLastMessage) {
			if(loop) {
				setRevealedCharacterCount(0);
				setCurrentMessageIndex(0);
			}
			return;
		}

		setRevealedCharacterCount(0);
		setCurrentMessageIndex(currentMessageIndex + 1);
	}, !currentMessageIsPlaying ? intermessageDelay : null);

	useTimeout(() => {
		onComplete?.();
	}, !isPlaying ? endMessageDelay : null);

	return (
		<>
			{currentMessage.slice(0, revealedCharacterCount)}
		</>
	);
}
