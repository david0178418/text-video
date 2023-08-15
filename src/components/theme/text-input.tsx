import { cva } from '@styled-system/css';
import { styled } from '@styled-system/jsx';

// Ganked from https://copy-paste-css.com/form-input-text
const inputStyle = cva({
	base: {
		fontWeight: 400,
		color: '#212529',
		backgroundColor: '#fff',
		backgroundClip: 'padding-box',
		border: '1px solid #ced4da',
		display: 'block',
		fontSize: 'sm',
		lineHeight: 'sm',
		width: 'full',
		borderColor: 'gray.200',
		borderRadius: 'md',
		appearance: 'none',
		transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
		_focus: {
			color: '#212529',
			backgroundColor: '#fff',
			borderColor: 'blue.500',
			outline: 0,
			boxShadow: '0 0 0 0.25rem rgb(13 110 253 / 25%)',
		},
		_dark: {
			backgroundColor: 'slate.900',
			borderColor: 'gray.700',
			color: 'gray.400',
		},
	},
	variants: {
		size: {
			small: {
				paddingTop: '2',
				paddingBottom: '2',
				paddingLeft: '3',
				paddingRight: '3',
			},
			medium: {
				paddingTop: '3',
				paddingBottom: '3',
				paddingLeft: '4',
				paddingRight: '4',
			},
			large: {
				paddingTop: '3',
				paddingBottom: '3',
				paddingLeft: '4',
				paddingRight: '4',
				sm: { padding: '5' },
			},
		},
	},
	defaultVariants: { size: 'medium' },
});

const Input = styled('input', inputStyle);

export default Input;
