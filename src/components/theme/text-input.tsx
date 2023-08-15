import { cva } from '@styled-system/css';
import { styled } from '@styled-system/jsx';

// Ganked from https://copy-paste-css.com/form-input-text
const inputStyle = cva({
	base: {
		padding: '6px 12px',
		fontSize: '16px',
		fontWeight: 400,
		lineHeight: 1.5,
		color: '#212529',
		backgroundColor: '#fff',
		backgroundClip: 'padding-box',
		border: '1px solid #ced4da',
		appearance: 'none',
		borderRadius: '4px',
		transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
		'&:focus': {
			color: '#212529',
			backgroundColor: '#fff',
			borderColor: '#86b7fe',
			outline: 0,
			boxShadow: '0 0 0 0.25rem rgb(13 110 253 / 25%)',
		},
	},
});

const Input = styled('input', inputStyle);

export default Input;
