import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.scss';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import { spawn } from 'child_process';

export const Textarea = forwardRef(
	({className, error, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
		return (
			<div className={styles.wrap}>
				<textarea className={cn(className, styles.textarea, {
					[styles.errorTextarea]: error
				})} ref={ref} {...props} />
				{error && <span className={styles.error}>{error.message}</span>}
			</div>
		);
	}
);