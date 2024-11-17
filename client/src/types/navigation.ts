import { ReactNode } from "react";

export type DepartmentsMenuItemSubDataType = {
	label: ReactNode;
	href: string;
};

export type DepartmentsMenuItemType = {
	label: ReactNode;
	startIcon?: ReactNode;
	children: {
		heading?: string;
		start_price: string;
		image_url: string;
		href: string;
		data: DepartmentsMenuItemSubDataType[];
	};
};

export type NavigationItemSubType = {
	label: ReactNode;
	description: string;
	href: string;
};

export type NavigationItemType = {
	label: ReactNode;
	children: NavigationItemSubType[];
};
