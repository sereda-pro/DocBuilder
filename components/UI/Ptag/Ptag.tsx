import { PtagProps } from './Ptag.props';
import styles from './Ptag.module.scss';
import cn from 'classnames';

export default function Ptag( { size='m', type='content', children, ...props }: PtagProps ): JSX.Element {
	switch (size) {
		case 's': // контент, размер текста маленький
			return (
				<p 
					className={cn(styles.s, {[styles.document]: type == 'document'})}
					{...props}
				>
					{children}
				</p>
			);
		case 'm': // контент, размер текста средний
			return (
				<p 
					className={cn(styles.m, {[styles.document]: type == 'document'})}
					{...props}
				>
					{children}
				</p>
			);
		case 'l': // контент, размер текста большой
			return (
				<p 
					className={cn(styles.l, {[styles.document]: type == 'document'})}
					{...props}
				>
					{children}
				</p>
			);
		case 'sd': // документ, размер текста маленький
			return (
				<p 
					className={cn(styles.sd, {[styles.document]: type == 'document'})}
					{...props}
				>
					{children}
				</p>
			);
		case 'md': // документ, размер текста средний
			return (
				<p 
					className={cn(styles.md, {[styles.document]: type == 'document'})}
					{...props}
				>
					{children}
				</p>
			);
		case 'ld': // документ, размер текста большой
			return (
				<p 
					className={cn(styles.ld, {[styles.document]: type == 'document'})}
					{...props}
				>
					{children}
				</p>
			);
		default: 
			return <></>;
	}
}