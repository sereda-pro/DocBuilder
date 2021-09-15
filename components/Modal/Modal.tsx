import { ModalProps } from './Modal.props';
import styles from './Modal.module.scss';
import cn from 'classnames';

export function Modal( {modalActive, setModalActive, children}: ModalProps): JSX.Element {
	
	return (
		<div 
			className={cn( styles.modal, {
				[styles.active]: modalActive === true,
			})} 
			onClick={() => setModalActive(false)}
		>
			<div 
				className={cn( styles.modal_content, {
					[styles.active]: modalActive === true,
				})}  
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	);
}