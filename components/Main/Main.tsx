import { MainProps } from './Main.props';
import styles from './Main.module.scss';
import cn from 'classnames';
import React, { useEffect } from 'react';
import { MainAboutUs } from '../MainAboutUs/MainAboutUs';
import { MainServices } from '../MainServices/MainServices';

export function Main( {children, ...props}: MainProps): JSX.Element {
	
	return (
		<main>

			<MainAboutUs />
			<MainServices />



		</main>
	);
}