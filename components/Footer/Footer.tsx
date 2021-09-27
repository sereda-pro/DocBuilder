import { FooterProps } from './Footer.props';
import styles from './Footer.module.scss';
import cn from 'classnames';
import { Button } from '../UI';
import Icon_tel from './icon_tel.svg';
import Icon_envelope from './Icon_envelope.svg';
import { Container } from '../UI';

export function Footer({
	children,
	...props
}: FooterProps ): JSX.Element {
	
	return (
		<footer className={styles.footer}>

			<Container className={styles.cont}>
				<div className={styles.footer_wrap}>
					<a href="#" className={styles.logo}>The law society</a>
					<div className={styles.contacts}>
						<a href="tel: +79809210020" className={cn(styles.tel, styles.contact)}><span><Icon_tel /></span>&nbsp;+7 980 921 00 20</a>
						<a href="mailto: office@law-society.ru" className={cn(styles.mail, styles.contact)}><span><Icon_envelope /></span>&nbsp;office@law-society.ru</a>
						<p>пн-чт с 8:00 до 19:00 </p>
						<p> пт с 9:00 до 16:00</p>	
					</div>
					<p className={styles.company}>
						ООО "Юридическое общество им. М.М.Сперанского"<br/>ИНН 5256124886, ОГРН 1135256008007
					</p>
					<a href="#" className={styles.doc}>Политика конфиденциальности</a>
					<p className={styles.right}>©2021 LAW SOCIETY. All rights reserved</p>
				</div>
			</Container>
			
		</footer>	
	);
}