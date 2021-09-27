import { MainAboutUsProps } from './MainAboutUs.props';
import styles from './MainAboutUs.module.scss';
import cn from 'classnames';
import React, { useEffect } from 'react';
import { Container } from '../UI';
import { Htag } from '../UI';

export function MainAboutUs( {children, ...props}: MainAboutUsProps): JSX.Element {
	
	return (
		<Container className={styles.about}>
			<Htag tag='h2' className={styles.htag}>Юридическое общество - это не только <mark>команда профессиональных юристов</mark>,<br />
			это <mark>юридический сервис</mark> нового поколения.</Htag>
			<div className={styles.about_wrap}>
				<div className={styles.image}>
					<img src="IndexPage/Consultation.png" alt="Коротко о компании..." />
				</div>
				<div className={cn(styles.ansvers, styles.a1)}>
					<p>Мы юридический отдел в вашем смартфоне или компьютере</p>
				</div>
				<div className={cn(styles.ansvers, styles.a2)}>
					<p>Работем по подписке и решаем сложные проектные задачи</p>
				</div>
				<div className={cn(styles.ansvers, styles.a3)}>
					<p>Используем современные сервисы клиентской поддержки</p>
				</div>
				<div className={cn(styles.ansvers, styles.a4)}>
					<p>Обходимся дешевле штатного юриста</p>
				</div>
				<div className={cn(styles.ansvers, styles.a5)}>
					<p>Дистанцилнно (в режиме online), сопровождаем бизнес из любого региона</p>
				</div>
				<div className={cn(styles.ansvers, styles.a6)}>
					<p>Все прозрачно и вы полностью контролируете ход исполнения задач</p>
				</div>
				<div className={cn(styles.ansvers, styles.a7)}>
					<p>А самое главное мы вегда на связи! &#128512; &#128512; &#128512; &#128077; &#128077; &#128077;</p>
				</div>
			</div>
			

		</Container>
	);
}