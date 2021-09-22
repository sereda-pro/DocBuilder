import { MainProps } from './Main.props';
import styles from './Main.module.scss';
import cn from 'classnames';
import { Htag } from '../UI';
import IconStrong from './IconStrong.svg';
import IconExp from './IconExp.svg';
import IconPart from './IconPart.svg';
import IconOnline from './IconOnline.svg';
import Point from './Point.svg';
import Circle from './Circle.svg';
import Ellipse from './Ellipse.svg';
import React, { useEffect } from 'react';

export function Main( {children, ...props}: MainProps): JSX.Element {
	
	return (
		<main>
			<div id='about' className={styles.contanier}>
				<Htag tag='h6'>О нас</Htag>
				<div className={styles.devider}></div>
				<Htag tag='h2'>Мы юристы</Htag>
			</div>
			
			<div id='cooperation' className={styles.contanier}>
				<Point className={styles.point}/>
				<Circle className={styles.circle}/>
				<Ellipse className={styles.ellipse}/>
				
				<Htag tag='h6'>Сотрудничество</Htag>
				<div className={styles.devider}></div>
				<Htag tag='h2'>Почему к нам обращаются</Htag>

				<div className={styles.wrap}>
					<div className={cn(styles.card, styles.strong)}>
						<IconStrong />
						<p>Мы находим ответы на сложные вопросы, по которым у внутренних юристов компании нет опыта работы</p>
					</div>

					<div className={cn(styles.card, styles.exp)}>
						<IconExp />
						<p>Вам необходимо получить мнение независимого специалиста или осуществить оценку ситуации с различных точек зрения</p>
					</div>

					<div className={cn(styles.card, styles.part)}>
						<IconPart />
						<p>Мы готовы взять на себя часть юридических функций вашей компании для разгрузки штатного юриста</p>
					</div>

					<div className={cn(styles.card, styles.online)}>
						<IconOnline />
						<p>Мы оказываем полный компленкс юридическиъ услуг онлайн, обслуживаем бизнес из любого региона России</p>
					</div>
				</div>

			</div>

			<div id='services' className={styles.contanier}>
				<Htag tag='h6'>Услуги</Htag>
				<div className={styles.devider}></div>
				<Htag tag='h2'>Что мы предлагем</Htag>
				<div className={styles.wrap_ul}>
					<ul>
						<li>Разработка договорной документации - договоров поставки, подряда, оказания услуг, агентских договоров, договоров аренды, купли-продажи недвижимости,
						дополнительных соглашений и актов.</li>
						<li>Анализ и редактирование договорной документации.</li>
						<li>Представление интересов клиента на переговорах при согласовании условий договоров.</li>
						<li>Ведение претензионной и судебной работы. Разработка трудовых договоров, должностных инструкций, дополнительных соглашений к трудовым договорам.</li>
						<li>Юридическое сопровождение конфликтных увольнений в судах.</li>
						<li>Консультирование по вопросам договорного, корпоративного, трудового, миграционного и иных отраслей права.</li>
					</ul>
				</div>
			</div>

			<div id='program' className={styles.contanier}>
				<Htag tag='h6'>Сервисы</Htag>
				<div className={styles.devider}></div>
				<Htag tag='h2'>Программные сервисы</Htag>
			</div>

			<div id='contаct' className={styles.contanier}>
				<Htag tag='h6'>Контакты</Htag>
				<div className={styles.devider}></div>
				<Htag tag='h2'>Как с нами связаться?</Htag>
			</div>

		</main>
	);
}