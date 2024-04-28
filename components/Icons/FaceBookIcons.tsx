import * as React from 'react';
const FaceBookIcon = (props: any) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={34}
		height={35}
		fill='none'
		{...props}
	>
		<path
			fill='#fff'
			d='M29.399.6h-25.2a4.204 4.204 0 0 0-4.2 4.2V30c0 2.316 1.884 4.2 4.2 4.2h25.2c2.316 0 4.2-1.884 4.2-4.2V4.8c0-2.316-1.884-4.2-4.2-4.2Z'
		/>
		<path
			fill='#000'
			fillRule='evenodd'
			d='M20.999 15.738h-2.8v-2.215c0-.612.501-.554 1.12-.554h1.12v-2.77h-2.24c-.892 0-1.746.35-2.376.974a3.304 3.304 0 0 0-.984 2.35v2.215h-2.24v2.77h2.24V24.6h3.36v-6.093h1.68l1.12-2.769Z'
			clipRule='evenodd'
		/>
	</svg>
);
export default FaceBookIcon;
