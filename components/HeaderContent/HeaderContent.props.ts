import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface HeaderContentProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement> {
	children?: ReactNode,
}