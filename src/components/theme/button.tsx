import { cva } from '@styled-system/css';
import { styled } from '@styled-system/jsx';

// from https://preline.co/docs/buttons.html
const buttonStyle = cva({
	base: {
		_focus: {
			outline: 'none',
			outlineOffset: 'none',
			boxShadow: '2',
		},
		alignItems: 'center',
		borderRadius: 'md',
		borderWidth: '1px',
		cursor: 'pointer',
		display: 'inline-flex',
		fontSize: 'sm',
		fontWeight: 'semibold',
		gap: 2,
		justifyContent: 'center',
		lineHeight: 'sm',
		paddingBottom: 3,
		paddingLeft: 4,
		paddingRight: 4,
		paddingTop: 3,
		transitionDuration: 'all',
		transitionProperty: 'all',
		transitionTimingFunction: 'all',
		_disabled: { opacity: 0.5 },
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
				borderColor: 'blue.100',
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
				borderColor: 'gray.200',
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
	defaultVariants: {
		variant: 'solid',
		size: 'medium',
	},
});

const Button = styled('button', buttonStyle);

export default Button;
