import styles from './IndexPage.module.scss';
import { IndexPageProps } from './IndexPage.props';
import Head from 'next/head';
import Link from 'next/link';
import cn from 'classnames';
import { Footer, Header, Main } from '../../components';
import { Modal } from '../../components';
import React, { useEffect } from 'react';

export const IndexPageComponent = (): JSX.Element => { 

	const navi = [
		{title: 'Решения', link: '#', anchor: 'cooperation'},
		{title: 'Услуги', link: '#', anchor: 'services'},
		{title: 'Экспертиза', link: '#', anchor: 'expertise'},
		{title: 'О компании', link: '#', anchor: 'about'},
	];

	return (
		<>
			<Head>
			<title>Конструктор закупок | Составить и заполнить документацию о закупке</title>
			</Head>

			<div className={styles.indexPage}>
				<Header 
					className={styles.block}
					navi={navi}
				/>
				<Main />
				<Footer />
			</div>
		</>
	);
};