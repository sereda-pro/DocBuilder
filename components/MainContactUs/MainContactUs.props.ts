import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface MainContactUsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode;
	id?: string;
}