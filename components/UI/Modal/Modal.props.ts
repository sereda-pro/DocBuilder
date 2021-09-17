import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';



export interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode;
	modalActive: boolean;
	setModalActive: (statusModal: boolean) => void;
}