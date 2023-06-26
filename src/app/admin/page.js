
import React from 'react';
import axios from "axios";
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import SideBar from '@/components/SideBar';
import Dashboard from '@/components/dashboard/Index';
import { redirect } from 'next/navigation';

const Admin = async () => {
    const session = await getServerSession(authOptions);
    if(!session){
        redirect('/signin');
    }
    
    return (
        <main className='min-h-screen flex w-screen bg-[#F5F5F5] overflow-hidden'>
            <section className='w-[20%] h-screen sticky'>
            <SideBar />
            </section>
            <section className='w-[80%] p-[50px]'>
            <Dashboard />
            </section>
        </main>
        );
};

export default Admin;