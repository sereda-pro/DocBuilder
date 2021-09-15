import { HeaderProps, Navi } from './Header.props';
import styles from './Header.module.scss';
import Menu from './Menu.svg';
import IconLK from './Icon_lk.svg';
import { Button } from '../Button/Button';
import cn from 'classnames';
import { Htag } from '../Htag/Htag';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import { FormContactUs } from '../FormContactUs/FormContactUs';
import { Button as Btn } from 'antd';


export function Header( {navi, children, ...props}: HeaderProps): JSX.Element {

	const [modalActive, setModalActive] = useState<boolean>(false);

	const navigation = navi && navi.map((item: Navi, i: number) => {
		return <a href={item.link} className={styles.navi_link} key={i}>{item.title}</a>;
	});
	
	return (
		<>
			<header className={styles.header}>
				<div className={styles.top_block}>
					<div className={styles.contanier}>
					
						<div className={styles.header_top}>
							<div className={styles.logo_wrap}>
								<a href="#" className={styles.logo}>The law society</a>
								<div className={styles.vertical_line}></div>
								<Menu />
							</div>
							<div className={styles.navi_wrap}>
								<nav className={styles.navi}>
									{navigation}
								</nav>
								<IconLK style={{
									width: '35px',
									height: '35px',
									marginLeft: '30px'
								}}/>
							</div>
						</div>
					</div>
				</div>

				<div className={cn(styles.contanier, styles.header_contents)}>
					<div className={styles.quick_links}>
						<a href="#">Юридические консультации</a>
						<div className={styles.vertical_line}></div>
						<a href="#">Судебные споры</a>
						<div className={styles.vertical_line}></div>
						<a href="#">Документы</a>
						<div className={styles.vertical_line}></div>
						<a href="#">Закупки (44-ФЗ/223-ФЗ)</a>
					</div>
					<div className={styles.title}>
						<Htag tag='h1'>Юридическая безопасность<br/>вашего бизнеса</Htag>
					</div>
					<ul className={styles.list}>
						<li>Более 10 лет в отрасли</li>
						<li>Положительный опыт решения административных вопросов и судебных дел</li>
						<li>Дистанционно сопровождаем бизнес из любого региона</li>
					</ul>
					<div className={styles.button}>
						<Button appearence='primary' icon={true} onClick={() => setModalActive(true)}>Получить консультацию</Button>		
						<Btn type="primary">Primary Button</Btn>
					</div>				
					<p>В двое дешевле штатного юриста.</p>
				</div>
			</header>

			<Modal
				modalActive={modalActive}
				setModalActive={setModalActive}
			>
				<FormContactUs />
				{/* <Btn type="primary">Primary Button</Btn> */}
			</Modal>
			
		</>
	);
}