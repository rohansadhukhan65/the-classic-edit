import React, { useEffect, useState } from 'react';
import CountDownTimer from '../CountdownTimer/CountDownTimer';

export default function FlashSalesBar() {
	return (
		<div className='bg-black/85 h-[45px] sm:h-[74px] flex items-center justify-center'>
			<CountDownTimer hr={6} timerTitle={' SALE price ends in : '} />
		</div>
	);
}
