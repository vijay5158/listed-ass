import SignInForm from '@/components/SignIn/SignInForm';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const SignIn = async () => {
const session = await getServerSession(authOptions);
if(session){
    redirect('/admin');
}
    return (
        <main className='w-screen min-h-screen flex'>
            <section className='w-2/5 h-auto bg-black flex items-center justify-center'>
            <span className='text-7xl text-[#FFF] font-bold'>Board.</span>
            </section>
            <section className='w-3/5 h-auto bg-[#F5F5F5] flex items-center justify-center'>
                <SignInForm />
            </section>
        </main>
    );
};

export default SignIn;