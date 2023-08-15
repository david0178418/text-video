import { css } from '@styled-system/css';
import ButtonsTheme from './theme-buttons';
import InputTheme from './theme.inputs';

export default
function ThemePage() {
	return (
		<>
			<InputTheme />
			<hr className={css({
				border: '1px solid lightgray',
				marginY: '5',
			})} />
			<ButtonsTheme />
		</>
	);
}
