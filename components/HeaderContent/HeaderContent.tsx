import { HeaderContentProps } from './HeaderContent.props';
import styles from './HeaderContent.module.scss';
import { Button } from '../UI';
import cn from 'classnames';
import { Modal } from '../UI';
import { useEffect, useState } from 'react';
import { FormContactUs } from '../FormContactUs/FormContactUs';
import { Htag } from '../UI';
import { Container } from '../UI';


export function HeaderContent( {children, ...props}: HeaderContentProps): JSX.Element {

	const [modalActive, setModalActive] = useState<boolean>(false);
	
	return (
		<Container>
			<div className={styles.content_wrap}>
				<div className={styles.title}>
					<Htag tag='h1'>Комплексное юридическое сопровождение<br/>вашего бизнеса</Htag>
				</div>
				<ul className={styles.list}>
					<li>Более 10 лет в отрасли</li>
					<li>Положительный опыт решения административных вопросов и судебных дел</li>
					<li>Дистанционно сопровождаем бизнес из любого региона</li>
				</ul>
				<div className={styles.button}>
					<Button 
						appearence='primary' 
						icon={true} 
						onClick={() => setModalActive(true)}
					>
						Получить консультацию
					</Button>		
					
					<Modal
						modalActive={modalActive}
						setModalActive={setModalActive}
					>
						<FormContactUs />
					</Modal>


				</div>				
				<p className={styles.disclaimer}>В двое дешевле штатного юриста.</p>
			</div>
		</Container>
	);
}