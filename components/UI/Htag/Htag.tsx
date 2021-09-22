import { HtagProps } from './Htag.props';
import styles from './Htag.module.scss';
import cn from 'classnames';

export function Htag( { tag, type='content', className, children }: HtagProps ): JSX.Element {
	switch (tag) {
		case 'h1': 
			return <h1 className={cn(className, styles.h1, {
				[styles.dh1]: type == 'document'
			})}>{children}</h1>;

		case 'h2': 
			return <h2 className={cn(className, styles.h2, {
				[styles.dh2]: type == 'document'
			})}>{children}</h2>;

		case 'h3': 
			return <h3 className={cn(className, styles.h3, {
				[styles.dh3]: type == 'document'
			})}>{children}</h3>;

		case 'h4': 
			return <h4 className={cn(className, styles.h4, {
				[styles.dh4]: type == 'document'
			})}>{children}</h4>;

		case 'h5': 
		return <h5 className={cn(className, styles.h5, {
			[styles.dh5]: type == 'document'
		})}>{children}</h5>;

		case 'h6': 
		return <h6 className={cn(className, styles.h6, {
			[styles.dh6]: type == 'document'
		})}>{children}</h6>;

		default: 
			return <></>;
	}
}