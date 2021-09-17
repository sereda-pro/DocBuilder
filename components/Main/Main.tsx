import { MainProps } from './Main.props';
import styles from './Main.module.scss';
import cn from 'classnames';



export function Main( {children, ...props}: MainProps): JSX.Element {
	
	return (
		<main>
			<div className={styles.contanier}>почему нас выбирают</div>
			<div className={styles.contanier}>что мы предлагаем</div>
			<div className={styles.contanier}>контакты</div>
		</main>
	);
}