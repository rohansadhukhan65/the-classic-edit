import * as React from 'react';
const LeftArrowIcon = (props: any) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={12}
		height={23}
		fill="none"
		{...props}
	>
		<g clipPath="url(#a)">
			<path
				fill="#fff"
				fillRule="evenodd"
				d="M11.75 21.886a.853.853 0 0 1-1.207 0L.316 11.718a.847.847 0 0 1 0-1.2L10.543.349a.856.856 0 0 1 1.457.6c0 .225-.09.44-.25.6l-9.626 9.569 9.626 9.568a.845.845 0 0 1 0 1.2Z"
				clipRule="evenodd"
			/>
		</g>
		<defs>
			<clipPath id="a">
				<path fill="#fff" d="M12 22.235H0V0h12z" />
			</clipPath>
		</defs>
	</svg>
);
export default LeftArrowIcon;
