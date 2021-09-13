import { SidebarProps } from './Sidebar.props';
import styles from './Layout.module.scss';
import cn from 'classnames';

export const Sidebar = ({ children, ...props }: SidebarProps ): JSX.Element => {
	return (
		<div {...props}>
			Sidebar
		</div>
	);
};