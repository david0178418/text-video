import { cva } from '@styled-system/css';
import { styled } from '@styled-system/jsx';

// Ganked from https://copy-paste-css.com/form-input-text
const h2Style = cva({
	base: {
		display: 'block',
		fontSize: 'xl',
		lineHeight: 'xl',
		fontWeight: 'bold',
		color: 'gray.800',
		sm: {
			fontSize: '2xl',
			lineHeight: '2xl',
		},
		_dark: { color: 'white' },
	},
});

const H2 = styled('h2', h2Style);

export default H2;
