import styles from './IndexPage.module.scss';
import { IndexPageProps } from './IndexPage.props';
import Head from 'next/head';
import Link from 'next/link';
import cn from 'classnames';
import { Footer, Header, Main } from '../../components';
import { Modal } from '../../components';
import React, { useEffect } from 'react';

export const IndexPageComponent = (): JSX.Element => { 
	// interface IAnchorRefs {
	// 	refHome?: React.LegacyRef<HTMLDivElement> | undefined,
	// 	refAbout?: React.LegacyRef<HTMLDivElement> | undefined,
	// 	refCooperation?: React.LegacyRef<HTMLDivElement> | undefined,
	// 	refServices?: React.LegacyRef<HTMLDivElement> | undefined,
	// 	refPrograms?: React.LegacyRef<HTMLDivElement> | undefined,
	// 	refContacts?: React.LegacyRef<HTMLDivElement> | undefined,
	// } 

	// const anchorRefs: IAnchorRefs = {
	// 	refHome: React.createRef(),
	// 	refAbout: React.createRef(),
	// 	refCooperation: React.createRef(),
	// 	refServices: React.createRef(),
	// 	refPrograms: React.createRef(),
	// 	refContacts: React.createRef(),
	// };

	// useEffect(() => {
	// 	const refHome = anchorRefs.refHome.current;
	// 	const refAbout = anchorRefs.refAbout.current;
	// 	const refCooperation = anchorRefs.refCooperation.current;
	// 	const refServices = anchorRefs.refServices.current;
	// 	const refPrograms = anchorRefs.refCooperation.current;
	// 	const refContacts = anchorRefs.refContacts.current;
	// }, []);

	const navi = [
		{title: 'Главная', link: '#', anchor: 'home'},
		{title: 'О нас', link: '#', anchor: 'about'},
		{title: 'Сотрудничество', link: '#', anchor: 'cooperation'},
		{title: 'Услуги', link: '#', anchor: 'services'},
		{title: 'Сервисы', link: '#', anchor: 'program'},
		{title: 'Контакты', link: '#', anchor: 'contаct'},
	];

	// [stateNav, setStateNav] = useState(initialState);

	

	// const scrollTo = (element: HTMLDivElement) :void => {
	// 	window.scroll({
	// 		left: 0,
	// 		top: element.offsetTop,
	// 		behavior: 'smooth'
	// 	});
	// };

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