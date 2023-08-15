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
	const delay = 50;
	const width = 512 * 2;
	const height = 288 * 2;

	useEffect(() => {
		const targetCanvas = document.createElement('canvas');
		targetCanvas.height = height;
		targetCanvas.width = width;

		ctxRef.current = targetCanvas.getContext('2d');
		const stream = targetCanvas.captureStream(60);

		recorderRef.current = new MediaRecorder(stream, { mimeType: 'video/webm;codecs=h264' });
		const chunks: Blob[] = [];

		recorderRef.current.addEventListener('dataavailable', (e) => {
			chunks.push(e.data);
		});

		recorderRef.current.addEventListener('stop', async () => {
			const a = document.createElement('a');
			const fixBlob = await fixWebmDuration(new Blob(chunks, { type: 'video/mp4' }));

			a.href = URL.createObjectURL(fixBlob);
			a.download = 'proof-of-concept.mp4';
			a.click();
			onComplete?.();
		});

		recorderRef.current.start();
	}, []);

	useInterval(async () => {
		if(!sourceRef.current || !ctxRef.current) return;

		// TODO: Is here a more efficient way to do this?
		const canvas = await toCanvas(sourceRef.current);
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
		<div
			ref={sourceRef}
			className={css({
				height,
				width,
				color: '#f7f9f9',
				backgroundColor: '#15202b',
				fontSize: '32px',
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
				onComplete={handleRevealComplete}
				messages={messages}
			/>
		</div>
	);
}
