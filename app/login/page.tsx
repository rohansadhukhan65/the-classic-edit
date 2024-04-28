'use client';
import HeaderFooterWrapperUser from '@/components/HeaderFooterWrapperUser';
import BlackUserIcon from '@/components/Icons/BlackUserIcon';
import BlackUserIconPluse from '@/components/Icons/BlackUserIconPluse';
import WhiteUserIcon from '@/components/Icons/WhiteUserIcon';
import WhiteUserIconPluse from '@/components/Icons/WhiteUserIconPluse';
import LoginForm from '@/components/LoginForm/LoginForm';
import SignUpForm from '@/components/SignupForm/SignUpForm';
import React, { useState } from 'react';

const Login = () => {
	const [isLoginFrm, setLoginFrm] = useState<Boolean>(true);
	return (
		<HeaderFooterWrapperUser>
			<div className='flex sm:p-14 justify-center items-center  w-full'>
				<div className='bg-gray-200 md:w-1/2 border rounded-lg shadow-lg flex items-center flex-col'>
					{/* Switch Buttons */}
					<div className='flex items-center sm:gap-x-1 mb-7 mt-14'>
						<button
							className={`transition-all duration-500 flex gap-x-1 sm:gap-x-5 justify-center items-center ${isLoginFrm ? 'text-sm sm:text-xl shadow-md font-semibold border-none  px-10 py-3 text-white bg-gray-900 rounded-lg' : 'text-sm sm:text-xl font-semibold border-none px-10 py-3 text-black rounded-lg'}`}
							onClick={(params) => {
								setLoginFrm(true);
							}}
						>
							{isLoginFrm ? (
								<WhiteUserIcon />
							) : (
								<BlackUserIcon />
							)}{' '}
							Sign in
						</button>
						<button
							className={`transition-all duration-500 flex gap-x-1 sm:gap-x-5 justify-center items-center ${!isLoginFrm ? 'text-sm sm:text-xl shadow-md font-semibold border-none  px-10 py-3 text-white bg-gray-900 rounded-lg' : 'text-sm sm:text-xl font-semibold border-none px-10 py-3 text-black rounded-lg'}`}
							onClick={(params) => {
								setLoginFrm(false);
							}}
						>
							{!isLoginFrm ? (
								<WhiteUserIconPluse />
							) : (
								<BlackUserIconPluse />
							)}{' '}
							Sign up
						</button>
					</div>
					{/* Form */}
					<div className='w-full my-5 px-14'>
						{isLoginFrm ? (
							<LoginForm
								signupToggler={() => {
									setLoginFrm((p) => !p);
								}}
							/>
						) : (
							<SignUpForm />
						)}
					</div>
				</div>
			</div>
		</HeaderFooterWrapperUser>
	);
};

export default Login;
