'use client';

import { Center } from '@styled-system/jsx';
import { domToCanvas } from 'modern-screenshot';
import RevealText from './reveal-text';
import { css } from '@styled-system/css';
import { useInterval } from 'usehooks-ts';
import {
	useEffect,
	useRef,
	useState,
} from 'react';

export default function Foo() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const sourceRef = useRef<HTMLDivElement>(null);
	const [isRecording, setIsRecording] = useState(true);
	const delay = 50;
	const width = 512;
	const height = 288;

	useEffect(() => {
		if(!canvasRef.current) return;

		const stream = canvasRef.current?.captureStream(30);

		const recorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
		console.log(1111);
		recorder.addEventListener('dataavailable', (e) => {
			console.log(e.data);
		});
		recorder.addEventListener('stop', () => {
			console.log('stopped');
		});
		recorder.start();
	}, []);

	useInterval(async () => {
		if(!canvasRef.current || !sourceRef.current) return;

		// TODO: Is here a more efficient way to do this?
		const canvas = await domToCanvas(sourceRef.current);
		canvasRef.current.getContext('2d')?.drawImage(canvas, 0, 0);
	}, isRecording ? delay : null);

	return (
		<Center flexDir="column">
			<div
				ref={sourceRef}
				className={css({
					height,
					width,
					color: '#f7f9f9',
					backgroundColor: '#15202b',
					fontSize: '16px',
					textAlign: 'center',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					padding: '20px',
				})}
			>
				<RevealText
					delay={delay}
					onComplete={() => setTimeout(() => setIsRecording(false), 500)}
					messages={[
						'This is a test.',
						'Just a test...',
						'...n\' stuff...',
						'Just making a simple tool to more readily make this type text video from a web app.',
						'If you\'re still reading this and want to follow along, then feel free to follow me (@JustDavidG).',
					]}
				/>
			</div>
			<canvas
				ref={canvasRef}
				height={height}
				width={width}
				className={css({ border: '1px solid black' })}
			/>
		</Center>
	);
}
