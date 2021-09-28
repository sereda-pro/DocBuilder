import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface MainAboutUsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode;
	id?: string;
}