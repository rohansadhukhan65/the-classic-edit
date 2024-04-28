import React from 'react';
import FaceBookIcon from '../Icons/FaceBookIcons';
import InstagramIcon from '../Icons/InstagramIcon';
import LinkedinIcon from '../Icons/LinkedinIcon';

export default function Footer() {
	return (
		<div className='bg-black text-white flex flex-col items-center '>
			<div className='flex md:flex-row gap-y-10 items-center flex-col px-20 md:px-[209px] py-[80px] md:justify-around w-full'>
				<div className='w-full h-[300px] md:w-[33%] flex gap-y-3 flex-col justify-between'>
					<p className='text-3xl font-semibold'>About</p>
					<div>Our Story​</div>
					<div>Lorem Ipsum Dolor Mit</div>
					<div>Conscious Circle​</div>
					<div>1 for 1 Initiative​</div>
					<div>Certification​</div>
					<div>Speak with us​</div>
					<div>Careers​</div>
				</div>

				<div className='w-full h-[300px] md:w-[33%] flex gap-y-3 flex-col justify-between'>
					<p className='text-3xl font-semibold'>Services</p>
					<div>Return</div>
					<div>Exchange​</div>
					<div>Buy-Back​</div>
					<div>Shipping & Delivery</div>
					<div>Data Usage​</div>
					<div>Privacy Policy​</div>
					<div>Payment Options​</div>
					<div>Track my order​</div>
				</div>

				<div className='w-full h-[300px] md:w-[33%] flex gap-y-3 flex-col justify-between'>
					<p className='text-3xl font-semibold'>Stay in touch</p>
					<p>Notify Me On The Next The Classic Edit Event!</p>
					<div className='flex flex-col gap-3'>
						<p className='text-3xl font-semibold'>Social Media</p>
						<div className='w-full flex gap-x-4'>
							<span>
								<FaceBookIcon />
							</span>
							<span>
								<InstagramIcon />
							</span>
							<span>
								<LinkedinIcon />
							</span>
						</div>
					</div>
					<div>In The News</div>
					<div>Blog</div>
					<div>Knowledge Center</div>
				</div>
			</div>
			<div className='text-center p-5'>
				Copyright 2024 The Classic Edit, All rights reserved.
			</div>
		</div>
	);
}
