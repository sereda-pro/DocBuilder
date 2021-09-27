import { MainServicesProps } from './MainServices.props';
import styles from './MainServices.module.scss';
import cn from 'classnames';
import React, { useEffect, useState } from 'react';
import { Container } from '../UI';
import { Htag } from '../UI';
import { listServices, IListServices } from './services';

export function MainServices( {children, ...props}: MainServicesProps): JSX.Element {


	const [description, setDescription] = useState(listServices[4]);

	const service = listServices.map((item, i) => {
			return (
				<div
					key={i}
					className={cn(styles.service, {
						[styles.s1]: item.className == 's1',
						[styles.s2]: item.className == 's2',
						[styles.s3]: item.className == 's3',
						[styles.s4]: item.className == 's4',
						[styles.s5]: item.className == 's5',
						[styles.s6]: item.className == 's6',
						[styles.s7]: item.className == 's7',
						[styles.s8]: item.className == 's8',
						[styles.s9]: item.className == 's9'
					})}
					data-name={item.title} 
					onClick={(e) => handleClick(e)}
				>
					<p className={styles.letter}>{item.letter}</p>
					<Htag tag='h6' className={styles.htag}>{item.title}</Htag>
				</div>
			);
	});

	const serviceDescription = (obj: IListServices) => {

		let list;
		if (Array.isArray(obj.description)) {
			list = obj.description.map((item, i) => {
				return (
					<li key={i}>{item}</li>
				);
			});
		} else {
			list = <p>{obj.description}</p>;
		}

		return (
			<div className={cn(styles.description)}>
				<Htag tag='h3'>{obj.title}</Htag>
				<ul>
					{list}
				</ul>
			</div>
		);
	};

	
	
	const handleClick = (e) => {
		switch (e.currentTarget.dataset.name) {
			case listServices[0].title: 
				setDescription(listServices[0]);
				break;
			case listServices[1].title: 
				setDescription(listServices[1]);
				break;
			case listServices[2].title: 
				setDescription(listServices[2]);
				break;
			case listServices[3].title: 
				setDescription(listServices[3]);
				break;
			case listServices[4].title: 
				setDescription(listServices[4]);
				break;
			case listServices[5].title: 
				setDescription(listServices[5]);
				break;
			case listServices[6].title: 
				setDescription(listServices[6]);
				break;
			case listServices[7].title: 
				setDescription(listServices[7]);
				break;
			case listServices[8].title: 
				setDescription(listServices[8]);
				break;
			default: break;
		}
	};
	
	return (

		<div className={styles.mainServices}>
			<div className={styles.img_services}>
				<img src="IndexPage/img-services.png" alt="services" />
			</div>
			<Container className={styles.services}>
				<Htag tag='h2' className={styles.htag}>
					Мы готовы взять на себя все правовые вопросы 
					вашей компании,<br /> а вам останется <mark>спокойно развивать свой бизнес</mark>,<br />
					и не отвлекаться на рутину.
				</Htag>

				<div className={styles.services_wrap}>

					{service}

					{serviceDescription(description)}

				</div>
			</Container>
		</div>
	);
}