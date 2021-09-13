import { MainProps } from './Main.props';
import styles from './Main.module.scss';
import { Button } from '../Button/Button';
import cn from 'classnames';
import { Htag } from '../Htag/Htag';

export function Main( {children, ...props}: MainProps): JSX.Element {
	
	return (
		<main>
			<div className={styles.contanier}>Hello</div>
		</main>
	);
}