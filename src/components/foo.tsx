'use client';

import { useState } from 'react';
import Bar from './bar';
import { css } from '@styled-system/css';
import Button from './theme/button';
import Input from './theme/text-input';
import { Center } from '@styled-system/jsx';

export default
function Foo() {
	const [messages, setMessages] = useState(['']);
	const [started, setStarted] = useState(false);

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
					disabled={started}
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
						placeholder="Enter your name"
						value={message}
						onChange={(event) => handleUpdateMessage(event.target.value, i)}
					/>
					<Button
						variant="ghost"
						onClick={() => handleRemoveMessage(i)}
					>
						Remove
					</Button>
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
