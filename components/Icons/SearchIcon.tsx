import * as React from 'react';
const SearchIcon = (props: any) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={25}
		height={24}
		fill="none"
		{...props}
	>
		<path
			stroke="#3B2A22"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M11.121 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21.123 21l-4.35-4.35"
		/>
	</svg>
);
export default SearchIcon;
