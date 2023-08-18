'use client';

import RevealText from './reveal-text';
import { css } from '@styled-system/css';
import fixWebmDuration from 'webm-duration-fix';
import { useInterval } from 'usehooks-ts';
import { toCanvas } from 'html-to-image';
import {
	useEffect,
	useRef,
	useState,
} from 'react';

interface Props {
	messages: string[];
	onComplete?(): void;
}

export default
function Bar(props: Props) {
	const {
		messages,
		onComplete,
	} = props;
	const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
	const sourceRef = useRef<HTMLDivElement>(null);
	const recorderRef = useRef<MediaRecorder | null>(null);
	const [isRecording, setIsRecording] = useState(true);
	// TODO Make configurable from UI
	const fps = 60;
	const frameDelay = 1000 / fps;
	const width = 1280;
	const height = 720;
	const videoName = 'proof-of-concept';
	const mimeType = 'video/webm;codecs=h264';

	useEffect(() => {
		const targetCanvas = document.createElement('canvas');
		targetCanvas.height = height;
		targetCanvas.width = width;
		// document.body.appendChild(targetCanvas);

		ctxRef.current = targetCanvas.getContext('2d');
		const stream = targetCanvas.captureStream(frameDelay);

		recorderRef.current = new MediaRecorder(stream, { mimeType });
		const chunks: Blob[] = [];

		recorderRef.current.addEventListener('dataavailable', (e) => {
			chunks.push(e.data);
		});

		recorderRef.current.addEventListener('stop', async () => {
			const a = document.createElement('a');
			const fixBlob = await fixWebmDuration(new Blob(chunks, { type: mimeType }));

			a.href = URL.createObjectURL(fixBlob);
			a.download = `${videoName}.mp4`;
			a.click();
			onComplete?.();
		});

		recorderRef.current.start();
	}, []);

	useInterval(async () => {
		if(!sourceRef.current || !ctxRef.current) return;

		// TODO: Is here a more efficient way to do this?
		const canvas = await toCanvas(sourceRef.current);
		ctxRef.current.drawImage(canvas, 0, 0, width, height);
	}, isRecording ? frameDelay : null);

	function handleRevealComplete() {
		setIsRecording(false);

		if(!recorderRef.current) {
			return;
		}

		recorderRef.current.stop();
	}

	return (
		<div
			ref={sourceRef}
			className={css({ display: 'inline-block' }) }
		>
			<div className={css({
				height,
				width,
				color: '#f7f9f9',
				backgroundColor: '#15202b',
				fontSize: '52px',
				textAlign: 'center',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				padding: '20px',
			})}>
				<RevealText
					// hack to catch the end of the animation with a little time padding for the last message
					onComplete={handleRevealComplete}
					messages={messages}
				/>
			</div>
			<h2 className={css({
				position: 'relative',
				top: -8,
				left: 5,
				zIndex: 1,
				fontSize: 24,
				fontStyle: 'italic',
				color: '#f7f9f9',
				opacity: .8,
				lineHeight: 0,
			})}>
				SimpleVideoMaker.com
			</h2>
		</div>
	);
}
