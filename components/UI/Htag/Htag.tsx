import { HtagProps } from './Htag.props';
import styles from './Htag.module.scss';
import cn from 'classnames';

export function Htag( { tag, type='content', className, children }: HtagProps ): JSX.Element {
	switch (tag) {
		case 'h1': 
			return <h1 className={cn(className, styles.h1, {
				[styles.document]: type == 'document'
			})}>{children}</h1>;
		case 'h2': 
			return <h2 className={cn(className, styles.h2, {
				[styles.document]: type == 'document'
			})}>{children}</h2>;
		case 'h3': 
			return <h3 className={cn(className, styles.h3, {
				[styles.document]: type == 'document'
			})}>{children}</h3>;
		case 'h4': 
			return <h4 className={cn(className, styles.h4, {
				[styles.document]: type == 'document'
			})}>{children}</h4>;
		default: 
			return <></>;
	}
}