import { cva } from '@styled-system/css';
import { styled } from '@styled-system/jsx';

// from https://preline.co/docs/buttons.html
const buttonStyle = cva({
	base: {
		paddingTop: 3,
		paddingBottom: 3,
		paddingLeft: 4,
		paddingRight: 4,
		display: 'inline-flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 2,
		borderRadius: 'md',
		borderWidth: '1px',
		fontWeight: 'semibold',
		fontSize: 'sm',
		lineHeight: 'sm',
		_focus: {
			outline: 'none',
			outlineOffset: 'none',
			boxShadow: '2',
		},
		transitionProperty: 'all',
		transitionTimingFunction: 'all',
		transitionDuration: 'all',
	},
	variants: {
		variant: {
			solid: {
				backgroundColor: 'blue.500',
				color: 'white',
				_hover: { backgroundColor: 'blue.600' },
			},
			outline: {
				borderColor: 'gray.200',
				color: 'blue.500',
				_hover: {
					color: 'white',
					backgroundColor: 'blue.500',
					borderColor: 'blue.500',
					_dark: { borderColor: 'blue.500' },
				},
				_dark: { borderColor: 'gray.700' },
			},
			ghost: {
				borderColor: 'transparent',
				color: 'blue.500',
				_hover: { backgroundColor: 'blue.100' },
			},
			soft: {
				backgroundColor: 'blue.100',
				color: 'blue.500',
				_hover: {
					color: 'white',
					backgroundColor: 'blue.500',
				},
			},
			white: {
				borderWidth: '1px',
				fontWeight: 'medium',
				backgroundColor: 'white',
				color: 'gray.700',
				boxShadow: 'sm',
				verticalAlign: 'middle',
				_hover: {
					backgroundColor: 'gray.50',
					_dark: {
						backgroundColor: 'slate.800',
						color: 'white',
					},
				},
				_dark: {
					backgroundColor: 'slate.900',
					borderColor: 'gray.700',
					color: 'gray.400',
				},
			},
			link: {
				borderColor: 'transparent',
				color: 'blue.500',
				_hover: { color: 'blue.700' },
			},
		},
	},
});

const Button = styled('button', buttonStyle);

export default Button;
