import { cva } from '@styled-system/css';
import { styled } from '@styled-system/jsx';

// Ganked from https://copy-paste-css.com/form-input-text
const h1Style = cva({
	base: {
		display: 'block',
		fontSize: '2xl',
		lineHeight: '2xl',
		fontWeight: 'bold',
		color: 'gray.800',
		sm: {
			fontSize: '3xl',
			lineHeight: '3xl',
		},
		_dark: { color: 'white' },
	},
});

const H1 = styled('h1', h1Style);

export default H1;
