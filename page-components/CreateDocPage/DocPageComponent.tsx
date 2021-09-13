
import Head from 'next/dist/next-server/lib/head';
import styles from './DocPageComponent.module.scss';
import React, { useState, useRef } from 'react';

export const DocPageComponent = (): JSX.Element => {
	
	const [counterBlock, setCounterBlock] = useState<number>(0);
	const [divList, setDivList] = useState<string[]>([]);
	const ref = useRef();
	
	//console.log(`Counter: ${counterBlock}`);
	//console.log(`divList: ${divList}`);
	
	function countTextBlock(e: React.MouseEvent) {
		e.stopPropagation();
		
		if (e.target == e.currentTarget) {
			const list: string[] = divList;
			setCounterBlock(x => x + 1);
			list.push(`новая строка ${list.length + 1}`);
		}
	}

	function handlerKeyDown (e: React.KeyboardEvent) {
		
		if (e.key == 'Enter') {
			e.preventDefault();
			const list: string[] = divList;
			setCounterBlock(x => x + 1);
			list.push(`новая строка ${list.length + 1}`);
			
		}
	}

	return (
		<>
			<Head>
			<title>Конструктор | Подготовить шаблон документации о закупке</title>
			</Head>
			
			<div 
				className={styles.DocPageComponent}
				onClick={countTextBlock}
			>
				<div>Количество блоков: {counterBlock}</div>
				
				{divList.map((item, index) => 
					<div
						className={styles.inputText} 
						key={index} 
						contentEditable='true'
						data-placeholder='Введите "/" для команды'
						onKeyDown={handlerKeyDown}
						
					>
					</div>)}
				
			</div>
		</>
	);
};