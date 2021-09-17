import { InputProps } from './Input.props';
import styles from './Input.module.scss';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

export const Input = forwardRef(
	({className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement> ): JSX.Element => {
		
		return (
			<div className={styles.wrap}>
				<input 
					className={cn(className, styles.input, {
						[styles.errorInput]: error
					})} 
					ref={ref} 
					{...props}
				/>
				{error && <span className={styles.error}>{error.message}</span>}
			</div>
		);
	}
);
