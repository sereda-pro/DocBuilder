import { ContainerProps } from './Container.props';
import styles from './Container.module.scss';
import cn from 'classnames';

export default function Container( { type='content', children, ...props }: ContainerProps ): JSX.Element {
	// switch (size) {
	// 	case 's': 
	// 		return <p className={cn(styles.s, {
	// 			[styles.document]: type == 'document'
	// 		})}>{children}</p>;
	// 	case 'm': 
	// 		return <p className={cn(styles.m, {
	// 			[styles.document]: type == 'document'
	// 		})}>{children}</p>;
	// 	case 'l': 
	// 		return <p className={cn(styles.l, {
	// 			[styles.document]: type == 'document'
	// 		})}>{children}</p>;
	// 	default: 
	// 		return <></>;
	// }
	return (
		<div className={styles.contentWraper}>
			<div
				className={cn(styles.container)}
				{...props}
			>
				<div className={styles.conteinerText}>
					<div className={styles.wrapText}>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
}