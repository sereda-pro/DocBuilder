import { MainContactUsProps } from './MainContactUs.props';
import styles from './MainContactUs.module.scss';
import cn from 'classnames';
import React, { useEffect, useState } from 'react';
import { Container } from '../UI';
import { Htag } from '../UI';
import { FormContactUs } from '../FormContactUs/FormContactUs';

export function MainContactUs( {id, children, ...props}: MainContactUsProps): JSX.Element {
	
	return (

		<div className={styles.mainContactUs}>
			<Container className={styles.container} id={id}>
				<Htag tag='h2' className={styles.htag}>
					Наши юристы специализируются на работе со средним и малым бизнесом и хорошо разбираются в его правовых ошибках.
				</Htag>
				<div className={styles.block_wrap}>
					<div className={styles.img}></div>
					<div className={styles.form}>
						<FormContactUs />
					</div>
				</div>
			</Container>
		</div>
	);
}