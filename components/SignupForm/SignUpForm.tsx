import React from 'react';
import Link from 'next/link';
import WhiteUserIconPluse from '../Icons/WhiteUserIconPluse';
import LoginUserIcon from '../Icons/LoginUserIcon';
import PasswordIcon from '../Icons/PasswordIcon';
import EmailIcon from '../Icons/EmailIcon';
import PasswordReEnterIcon from '../Icons/PasswordReEnterIcon';
import { motion } from 'framer-motion';

// variants
const variants = {
	hidden: { opacity: 0 },
	enter: { opacity: 1 },
};

const SignUpForm = () => {
	return (
		<motion.main
			variants={variants}
			initial='hidden'
			animate='enter'
			transition={{ type: 'liner', delay: 0.2, duration: 0.4 }}
		>
			{/* Full Name */}
			<div className='relative flex bg-white shadow-lg rounded-lg items-center w-full my-5'>
				<label className='absolute pl-3'>
					<LoginUserIcon />
				</label>
				<input
					className='bg-white pl-14 w-full rounded-lg h-[40px] outline-none'
					type='email'
					placeholder='Full Name'
				/>
			</div>
			{/* Email */}
			<div className='relative flex bg-white shadow-lg rounded-lg items-center w-full my-5'>
				<label className='absolute pl-3'>
					<EmailIcon />
				</label>
				<input
					className='bg-white pl-14 w-full rounded-lg h-[40px] outline-none'
					type='email'
					placeholder='Email'
				/>
			</div>
			{/* Password */}
			<div className='relative flex bg-white shadow-lg rounded-lg items-center w-full my-5'>
				<label className='absolute pl-4'>
					<PasswordIcon />
				</label>
				<input
					className='bg-white pl-14 w-full rounded-lg h-[40px] outline-none'
					type='password'
					placeholder='Password'
				/>
			</div>
			{/* Confirm Password */}
			<div className='relative flex bg-white shadow-lg rounded-lg items-center w-full my-5'>
				<label className='absolute pl-4'>
					<PasswordReEnterIcon />
				</label>
				<input
					className='bg-white pl-14 w-full rounded-lg h-[40px] outline-none'
					type='password'
					placeholder='Confirm Password'
				/>
			</div>

			{/* Remember Password */}
			<div className='flex items-center justify-start my-6'>
				<input
					type='checkbox'
					className='h-6 w-6 border border-gray-400 rounded checked:bg-gray-500 checked:border-transparent mr-2'
				/>
				<label>
					Accept{' '}
					<span className='font-semibold'>
						Terms & Condition
					</span>
				</label>
			</div>

			{/* Submit Button */}
			<div className='bg-gray-900 w-1/1 m-auto text-white text-center rounded-lg py-3 flex justify-center items-center gap-x-3'>
				<WhiteUserIconPluse /> Sign in
			</div>
		</motion.main>
	);
};

export default SignUpForm;
