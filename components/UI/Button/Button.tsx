import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import cn from 'classnames';
import ArrowIcon from './Arrow.svg';
import Icon_arm from './Icon_arm.svg';


export function Button( {
	appearence='primary',
	arrow='none',
	icon=false,
	children,
	className,
	...props
}: ButtonProps ): JSX.Element {

	return (
		<button 
			className={cn(styles.Button, className, {
				[styles.primary]: appearence == 'primary',
				[styles.secondary]: appearence == 'secondary',
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
			{icon != false && 
				<span className={styles.icon_arm}>
					<Icon_arm />
				</span>
			}
		</ button>
	);
}