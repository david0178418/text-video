'use client';

import { useState } from 'react';
import Bar from './bar';
import { css } from '@styled-system/css';
import Button from './theme/button';
import Input from './theme/text-input';
import { Center, HStack } from '@styled-system/jsx';
import { isTruthy } from '@/common/utils';
import RevealText from './reveal-text';

export default
function Foo() {
	const [messages, setMessages] = useState(['']);
	const [started, setStarted] = useState(false);
	const canGenerate = messages.length > 0 && messages.every(isTruthy);

	function handleUpdateMessage(updatedMessage: string, index: number) {
		const newMessages = [...messages];
		newMessages[index] = updatedMessage;
		setMessages(newMessages);
	}

	function handleRemoveMessage(index: number) {
		const newMessages = [...messages];
		newMessages.splice(index, 1);
		setMessages(newMessages);
	}

	return (
		<div className={css({
			paddingTop: 3,
			width: 'full',
		})}>
			<Center>
				<Button
					variant="solid"
					backgroundColor="green"
					disabled={!canGenerate || started}
					onClick={() => setStarted(true)}
					marginRight={10}
				>
					Generate
				</Button>
				<Button variant="solid" onClick={() => setMessages([...messages, ''])}>
					Add line
				</Button>
			</Center>
			{messages.map((message, i) => (
				<HStack key={i} paddingTop={3}>
					<Input
						placeholder="Enter some text"
						value={message}
						onChange={(event) => handleUpdateMessage(event.target.value, i)}
					/>
					{!!i && (
						<Button
							variant="ghost"
							color="red"
							onClick={() => handleRemoveMessage(i)}
						>
							Remove
						</Button>
					)}
				</HStack>
			))}
			{started && (
				<>
					<Center
						position="absolute"
						top={0}
						left={0}
						width="screen"
						height="screen"
						backgroundColor="white"
						zIndex={1000}
					>
						<RevealText
							loop
							messages={['Generating your video......']}
						/>
					</Center>
					<Bar
						onComplete={() => setStarted(false)}
						messages={messages}
					/>
				</>
			)}
		</div>
	);
}
