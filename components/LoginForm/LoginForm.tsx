import React from 'react';
import LoginUserIcon from '../Icons/LoginUserIcon';
import PasswordIcon from '../Icons/PasswordIcon';
import Link from 'next/link';
import WhiteLoginIcon from '../Icons/WhiteLoginIcon';
import { motion } from 'framer-motion';

// variants
const variants = {
	hidden: { opacity: 0 },
	enter: { opacity: 1 },
};

const LoginForm = ({ signupToggler }: any) => {
	return (
		<motion.main
			variants={variants}
			initial='hidden'
			animate='enter'
			transition={{ type: 'liner', delay: 0.2, duration: 0.4 }}
		>
			{/* User ID */}
			<div className='relative flex bg-white shadow-lg rounded-lg items-center w-full my-5'>
				<label className='absolute pl-3'>
					<LoginUserIcon />
				</label>
				<input
					className='bg-white pl-14 w-full rounded-lg h-[40px] outline-none'
					type='text'
					placeholder='Email/Phone'
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

			{/* Forgot Password */}
			<div className='mb-5 cursor-pointer'>
				<Link href={'/'} className='font-semibold cursor-pointer'>
					Forgot Password?
				</Link>
			</div>

			{/* Remember Password */}
			<div className='flex items-center justify-start my-6'>
				<input
					type='checkbox'
					className='h-6 w-6 border border-gray-400 rounded checked:bg-gray-500 checked:border-transparent mr-2'
				/>
				<label>Remember Me</label>
			</div>

			{/* Submit Button */}
			<div className='bg-gray-900 w-1/1 m-auto text-white text-center rounded-lg py-3 flex justify-center items-center gap-x-3'>
				<WhiteLoginIcon /> Sign in
			</div>

			{/* Dont have account ? */}
			<div className='p-5 shadow-lg rounded-lg bg-white mt-14 mb-14'>
				<p>
					Dont have an account ?{' '}
					<span
						className='font-bold text-black cursor-pointer'
						onClick={signupToggler}
					>
						Sign Up
					</span>
				</p>
			</div>
		</motion.main>
	);
};

export default LoginForm;
