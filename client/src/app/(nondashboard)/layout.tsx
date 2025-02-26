import Navbar from '@/components/Navbar';
import { NAVBAR_HEIGHT } from '@/lib/constants';
import { ReactNode } from 'react';

const NonDashboardLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<Navbar />
			<main className={`h-full flex w-full flex-col pt-[${NAVBAR_HEIGHT}px]`}>{children}</main>
		</div>
	);
};

export default NonDashboardLayout;
