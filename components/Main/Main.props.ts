import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

interface IAnchorRefs {
		refHome?: React.LegacyRef<HTMLDivElement> | undefined,
		refAbout?: React.LegacyRef<HTMLDivElement> | undefined,
		refCooperation?: React.LegacyRef<HTMLDivElement> | undefined,
		refServices?: React.LegacyRef<HTMLDivElement> | undefined,
		refPrograms?: React.LegacyRef<HTMLDivElement> | undefined,
		refContacts?: React.LegacyRef<HTMLDivElement> | undefined,
	} 
export interface MainProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode;
}