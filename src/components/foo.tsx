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

	}, []);

	useInterval(async () => {
		if(!canvasRef.current || !sourceRef.current) return;

		console.log('recording');

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
					backgroundColor: 'lightgray',
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
					onComplete={() => setIsRecording(false)}
				>
					foofoofoofoofoofoofoofoo foofoofoofoofoofoofoofoo
					foofoofoofoofoofoofoofoo foofoofoofoofoofoofoofoo
					foofoofoofoofoofoofoofoo foofoofoofoofoofoofoofoo
				</RevealText>
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
