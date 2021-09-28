import { MainProps } from './Main.props';
import styles from './Main.module.scss';
import cn from 'classnames';
import React, { useEffect } from 'react';
import { MainAboutUs } from '../MainAboutUs/MainAboutUs';
import { MainServices } from '../MainServices/MainServices';
import { MainContactUs } from '../MainContactUs/MainContactUs';
import { MainPrices } from '../MainPrices/MainPrices';

export function Main( {children, ...props}: MainProps): JSX.Element {
	
	return (
		<main>

			<MainAboutUs id='about' />
			<MainServices id='services'/>
			<MainContactUs id='news'/>
			<MainPrices id='cooperation' />
			
		</main>
	);
}