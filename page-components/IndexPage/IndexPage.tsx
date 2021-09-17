import styles from './IndexPage.module.scss';
import { IndexPageProps } from './IndexPage.props';
import Head from 'next/head';
import Link from 'next/link';
import cn from 'classnames';
import { Footer, Header, Main } from '../../components';
import { Modal } from '../../components';

export const IndexPageComponent = (): JSX.Element => {

	const navi = [
		{title: 'Главная', link: '/'},
		{title: 'О нас', link: '#'},
		{title: 'Сотрудничество', link: '#'},
		{title: 'Услуги', link: '#'},
		{title: 'Сервисы', link: '#'},
		{title: 'Контакты', link: '#'},
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