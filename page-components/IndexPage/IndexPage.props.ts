import {DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IndexPageProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
	children: ReactNode;	
}