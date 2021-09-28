import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface MainServicesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode;
	id?: string;
}