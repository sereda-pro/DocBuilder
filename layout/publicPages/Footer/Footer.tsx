import { FooterProps } from './Footer.props';
import styles from './Layout.module.scss';
import cn from 'classnames';

export const Footer = ({ children, ...props }: FooterProps ): JSX.Element => {
	return (
		<div {...props}>
			Footer
		</div>
	);
};