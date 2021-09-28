import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface MainPricesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode;
	id?: string;
}