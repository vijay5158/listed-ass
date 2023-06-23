"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { signIn, signOut } from "next-auth/react";

const SignInForm = () => {

    const handleSignin = (e)=>{
        e.preventDefault()
        signIn();
    }

    return (
        <main className='min-w-[45%] min-h-[50vh]'>
            <div>
                <h2 className='text-[#000] text-4xl font-bold mb-[5px]'>
                Sign In
                </h2>
                <p className='text-base text-black'>
                Sign in to your account
                </p>
            </div>
            <div className='mt-[26px] w-full flex gap-[25px]'>
                <button onClick={() => signIn('google')} className='text-[#858585] flex flex-1 items-center justify-center gap-[10px] text-xs px-[19px] py-[8px] rounded-[10px] bg-white'>
                    <Image 
                    src='/assets/google-icon 1.svg'
                    alt='google icon'
                    width={14}
                    height={14}
                    />                    
                    Sign in with Google
                </button>
                <button className='text-[#858585] flex flex-1 items-center justify-center gap-[10px] text-xs px-[19px] py-[8px] rounded-[10px] bg-white'>
                    <Image 
                    src='/assets/apple 1.svg'
                    alt='apple icon'
                    width={14}
                    height={14}
                    />                    
                    Sign in with Apple
                </button>
            </div>
            <div className="bg-white mt-[25px] rounded-[20px] p-[30px]">
      <div className="mb-[20px]">
        <label className="block text-black text-base mb-[10px]" htmlFor="email">
        Email address
        </label>
        <input
          className="w-full bg-[#F5F5F5] rounded-[10px] px-[15px] outline-none py-[10px] text-black text-base"
          type="email"
          id="email"
          placeholder="Enter your email address"
        />
      </div>
      <div className="mb-[20px]">
        <label className="block text-black text-base mb-[10px]" htmlFor="password">
          Password
        </label>
        <input
          className="w-full bg-[#F5F5F5] rounded-[10px] px-[15px] outline-none py-[10px] text-black text-base"
          type="password"
          id="password"
          placeholder="Enter your password"
        />
      </div>
      <div className="text-left mb-[20px]">
        <Link className="text-[#346BD4] text-base" href="#">
        Forgot password?
        </Link>
      </div>
      <button
        className="bg-[#000] w-full rounded-[10px] text-white text-base text-center font-bold px-4 py-[10px]"
        type="button"
      >
        Sign In
      </button>
    </div>
            <div className='mt-[25px] flex items-center justify-center gap-1'>
                <p className='text-[#858585] text-base'>
                Don’t have an account? 
                </p>
                <Link href="/signup" className='text-[#346BD4] text-base'>Register here</Link>
            </div>
        </main>
    );
};

export default SignInForm;