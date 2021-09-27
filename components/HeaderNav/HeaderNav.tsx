import { HeaderNavProps, Navi } from './HeaderNav.props';
import styles from './HeaderNav.module.scss';
import Menu from './Menu.svg';
import IconLK from './Icon_lk.svg';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { Container } from '../UI';

export function HeaderNav( {navi, children, ...props}: HeaderNavProps): JSX.Element {

	const [anchor, setAnchor] = useState<string>();
	useEffect(() => {
		const element = document.getElementById(anchor);
		
		if (element != null) {
				window.scroll({
				left: 0,
				top: element.offsetTop + 30,
				behavior: 'smooth'
			});
		}
	}, [anchor]);

	const handlerOnClickAnchor = (e, anchor: string) => {
		e.preventDefault();
		setAnchor(anchor);
	};

	const navigation = navi && navi.map((item: Navi, i: number) => {
		return (
			<a 
				href={item.link} 
				className={styles.navi_link} 
				key={i}
				onClick = {(e) => handlerOnClickAnchor(e, item.anchor)}
			>
				{item.title}
			</a>
		);
	});
	
	return (
		<div className={styles.block}>
			<Container>

					<div className={styles.header_nav}>

						<div className={styles.logo_wrap}>
							<a href="/" className={styles.logo}>The law society</a>
							<div className={styles.vertical_line}></div>
							<Menu className={styles.menu}/>
						</div>

						<div className={styles.navi_wrap}>

							<nav className={styles.navi}>
								{navigation}
							</nav>

							<IconLK />
						</div>
					</div>

			</Container>
		</div>
	);
}