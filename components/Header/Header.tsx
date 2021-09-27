import { HeaderProps} from './Header.props';
import styles from './Header.module.scss';
import { HeaderNav } from '../HeaderNav/HeaderNav';
import { Container } from '../UI';
import { HeaderContent } from '../HeaderContent/HeaderContent';


export function Header( {navi, children, ...props}: HeaderProps): JSX.Element {
	
	return (
		<header className={styles.header}>

			<Container>
				<img src="IndexPage/bacground.png" alt="background" />
			</Container>
			
			<HeaderNav navi={navi} />

			<Container>
				<div className={styles.quick_links}>
					<a href="#">Юридические консультации</a>
					<div className={styles.vertical_line}></div>
					<a href="#">Судебные споры</a>
					<div className={styles.vertical_line}></div>
					<a href="#">Документы</a>
					<div className={styles.vertical_line}></div>
					<a href="#">Консалтинг закупок (44-ФЗ/223-ФЗ)</a>
				</div>
			</Container>

			<HeaderContent />

		</header>
	);
}