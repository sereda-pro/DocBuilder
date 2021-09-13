import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Services(): JSX.Element {
	return (
		<>

			<div>
				<Head>
				<title>Все сервисы</title>
				</Head>

				<div>
					<Link href={'/'}><a>Главная</a></Link>
					<h1>Cписок всех сервисов</h1>
					
				</div>
			</div>

		</>

	
	);
}

export default Services;
