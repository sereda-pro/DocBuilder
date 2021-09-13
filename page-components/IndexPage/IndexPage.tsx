
// import LogoIcon from './Images/Logo.svg';
import styles from './IndexPage.module.scss';
import { IndexPageProps } from './IndexPage.props';
import Head from 'next/head';
import Link from 'next/link';
import cn from 'classnames';
import Image from 'next/image';
import { Footer, Header, Main, Modal } from '../../components';
import { useState } from 'react';



export const IndexPageComponent = (): JSX.Element => {
	const [modalActive, setModalActive] = useState<boolean>(false);

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
					setModalActive={setModalActive}
				/>
				<Main />
				<Footer />
			</div>
			<Modal
				active={modalActive}
				setModalActive={setModalActive}
			>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, dolorum.</p>
			</Modal>

		</>
	);
};