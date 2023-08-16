'use client';

import { useState } from 'react';
import Bar from './bar';
import { css } from '@styled-system/css';
import Button from './theme/button';
import Input from './theme/text-input';
import { Center } from '@styled-system/jsx';
import { isTruthy } from '@/common/utils';

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
		<div className={css({ paddingTop: 3 })}>
			<Center>
				<Button
					variant="solid"
					disabled={!canGenerate || started}
					onClick={() => setStarted(true)}
					marginRight={10}
				>
					Generate
				</Button>
				<Button variant="solid" onClick={() => setMessages([...messages, ''])}>
					Add
				</Button>
			</Center>
			{messages.map((message, i) => (
				<div key={i}>
					<Input
						placeholder="Enter some text"
						value={message}
						onChange={(event) => handleUpdateMessage(event.target.value, i)}
					/>
					{!!i && (
						<Button
							variant="ghost"
							onClick={() => handleRemoveMessage(i)}
						>
							Remove
						</Button>
					)}
				</div>
			))}
			{started && (
				<Bar
					onComplete={() => setStarted(false)}
					messages={messages}
				/>
			)}
		</div>
	);
}
