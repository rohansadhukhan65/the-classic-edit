import * as React from 'react';
const UserIcon = (props: any) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={25}
		height={24}
		fill='none'
		{...props}
	>
		<path
			stroke='#3B2A22'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2}
			d='M20.117 21v-2a4 4 0 0 0-4-4h-8a4 4 0 0 0-4 4v2M12.117 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z'
		/>
	</svg>
);
export default UserIcon;
