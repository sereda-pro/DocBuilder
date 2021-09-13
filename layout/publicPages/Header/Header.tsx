import { HeaderProps } from './Header.props';
import styles from './Layout.module.scss';
import cn from 'classnames';
import Link from 'next/dist/client/link';

export const Header = ({ children, ...props }: HeaderProps ): JSX.Element => {
	return (
		<div {...props}>
			Header 
		</div>
	);
};