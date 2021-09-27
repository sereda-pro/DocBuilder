import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface Navi {
	title: string,
	link: string,
	anchor: string,
}

export interface HeaderNavProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement> {
	children?: ReactNode,
	navi: Navi[],
}