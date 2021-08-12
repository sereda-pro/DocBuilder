import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';


export default function Button( { appearence , arrow='none', children, className, ...props }: ButtonProps ): JSX.Element {
	return (
		<button 
			className={cn(styles.Button, className, {
				[styles.primary]: appearence == 'primary',
				[styles.ghost]: appearence == 'ghost'
			})}
			{...props}
		>
			{children}
			{arrow != 'none' && 
				<span
					className={cn(styles.arrow, {
						[styles.down]: arrow == 'down',
					})}
				>
					<ArrowIcon />
				</span>
			}
		</ button>
	);
}