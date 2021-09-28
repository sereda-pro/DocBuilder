import { MainPricesProps } from './MainPrices.props';
import styles from './MainPrices.module.scss';
import cn from 'classnames';
import React, { useEffect, useState } from 'react';
import { Container } from '../UI';
import { Htag } from '../UI';
import { FormContactUs } from '../FormContactUs/FormContactUs';

export function MainPrices( {id, children, ...props}: MainPricesProps): JSX.Element {
	
	return (

		<div className={styles.mainPrices}>
			<Container className={styles.container} id={id}>
				<Htag tag='h2' className={styles.htag}>
					Вы можете передать нам все рутинные задачи по ежемесячной подписке или поручить сложный проект, в котором вам нужна помощь.
				</Htag>
				<div className={styles.mainPrices_wrap}>
					<div className={cn(styles.price, styles.abonent)}>
						<Htag tag='h4'>Абонентское обслуживание</Htag>
						<ul>
							<li>Тариф зависит от объема ваших задач</li>
							<li>Подписка позволяет эффективно планировать расходы</li>
							<li>Полностью снимаем с вас юридическую рутину</li>
							<li>Помогаем в экстренных ситуациях</li>
							<li>Снижаем риски не дожидаясь проблем</li>
						</ul>
						<a href="#">Подробнее...</a>
					</div>

					<img src="IndexPage/lawyers.png" alt="Юристы" />

					<div className={cn(styles.price, styles.project)}>
						<Htag tag='h4'>Проектная работа</Htag>
						<ul>
							<li>Правовая помощь по развитию и масштабированию бизнеса в РФ и за рубежом</li>
							<li>Решение нестандартных задач, включая международное право и ВЭД</li>
							<li>Аудит и оценка правовых рисков новых проектов и рынков</li>
							<li>Due diligence</li>
							<li>Защита в арбитражных судах и третейских судах, судах общей юрисдикции</li>
							<li>Помощь в привлечении и структурировании инвестиций</li>
						</ul>
						<a href="#">Подробнее...</a>
					</div>
				</div>
			
			</Container>
		</div>
	);
}