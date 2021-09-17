import { FooterProps } from './Footer.props';
import styles from './Footer.module.scss';
import cn from 'classnames';
import { Button } from '../UI';
import Icon_tel from './icon_tel.svg';
import Icon_envelope from './Icon_envelope.svg';

export function Footer({
	children,
	...props
}: FooterProps ): JSX.Element {
	
	return (
		<footer className={styles.footer}>
			<section className={styles.container}>


				<a href="#" className={styles.logo}>The law society</a>
				<div className={styles.contacts}>
					
					<a href="tel: +79809210020" className={cn(styles.tel, styles.contact)}><span><Icon_tel /></span>&nbsp;+7 980 921 00 20</a>
					<a href="mailto: office@law-society.ru" className={cn(styles.mail, styles.contact)}><span><Icon_envelope /></span>&nbsp;office@law-society.ru</a>
					<Button appearence='secondary' icon={true} className={styles.button}>Личный кабинет</Button>
				</div>
				<a href="#" className={styles.doc}>Политика конфиденциальности</a>
				<p className={styles.name_company}>ООО "Юридическое общество им. М.М.Сперанского"
					<br/>ИНН 5256124886, ОГРН 1135256008007</p>
				<div className={styles.law}>
					<p className={styles.right_reserved}>©2021 LAW SOCIETY. All rights reserved</p>
				</div>
			</section>
		</footer>	
	);
}