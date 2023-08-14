'use client';

import { Center } from '@styled-system/jsx';
import { domToCanvas } from 'modern-screenshot';
import RevealText from './reveal-text';
import { css } from '@styled-system/css';
import fixWebmDuration from 'webm-duration-fix';
import { useInterval } from 'usehooks-ts';
import {
	useEffect,
	useRef,
	useState,
} from 'react';

export default function Foo() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
	const sourceRef = useRef<HTMLDivElement>(null);
	const recorderRef = useRef<MediaRecorder | null>(null);
	const [isRecording, setIsRecording] = useState(true);
	const delay = 50;
	const width = 512;
	const height = 288;

	useEffect(() => {
		if(!canvasRef.current) return;

		ctxRef.current = canvasRef.current.getContext('2d');
		const stream = canvasRef.current.captureStream();

		recorderRef.current = new MediaRecorder(stream, { mimeType: 'video/webm;codecs=h264' });
		const chunks: Blob[] = [];

		recorderRef.current.addEventListener('dataavailable', (e) => {
			console.log(e.data);
			chunks.push(e.data);
		});

		recorderRef.current.addEventListener('stop', async () => {
			const a = document.createElement('a');
			const fixBlob = await fixWebmDuration(new Blob(chunks, { type: 'video/mp4' }));

			a.href = URL.createObjectURL(fixBlob);
			a.download = 'proof-of-concept.mp4';
			a.click();
		});

		recorderRef.current.start();
	}, []);

	useInterval(async () => {
		if(!canvasRef.current || !sourceRef.current || !ctxRef.current) return;

		// TODO: Is here a more efficient way to do this?
		const canvas = await domToCanvas(sourceRef.current);
		ctxRef.current.drawImage(canvas, 0, 0);
	}, isRecording ? delay : null);

	function handleRevealComplete() {
		setIsRecording(false);

		if(!recorderRef.current) {
			return;
		}

		recorderRef.current.stop();
	}

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
					// hack to catch the end of the animation with a little time padding for the last message
					onComplete={() => setTimeout(handleRevealComplete, 2000)}
					messages={[
						'Yet another test...',
						'The first test required making a local pass with ffmpeg to properly set the duration of the video.',
						'This video did not require that extra pass and was made entirely in the browser.',
						'This means the proof-of-concept of the core idea is complete!',
						'Now, I just need to slap a basic UI on this, get a domain, and deploy it.',
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
