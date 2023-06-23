"use client";

import Image from 'next/image';
import React from 'react';
import LineChart from './LineChart';
import PieChart from './PieChart';

const Dashboard = () => {
    return (
        <div className='w-full'>
            <section className='w-full flex items-center justify-between'>
                <h3 className='text-2xl font-bold text-[#000]'>Dashboard</h3>
                <div className='flex gap-[16px] items-center'>
                    <label htmlFor="search" className='relative'>
                    <input type="text" name="search" placeholder='Search...' id="search" className='outline-none pl-[15px] pr-[30px] py-[7px] bg-[#fff] rounded-[10px] text-sm text-[#B0B0B0]' />
                    <span className='absolute cursor-pointer right-[7px] top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <Image alt='image' src="/assets/Search icon.svg" height={12} width={12} />
                    </span>
                    </label>
                    <span className='cursor-pointer'>
                        <Image alt='image' src="/assets/Vector.svg" height={20} width={18} className='' />
                    </span>
                    <span className='cursor-pointer'>
                        <Image alt='image' src="/assets/image 1.png" height={50} width={50} className='rounded-full p-2' />
                    </span>
                </div>
            </section>
            <section className='w-full flex items-center gap-[36px] mt-[40px]'>
                <div className="flex-1 px-[25px] py-[20px] bg-[#DDEFE0] rounded-[20px] h-[120px]">
                    <div className='flex justify-end'>
                        <Image alt='image' src="/assets/Vector (1).svg" width={26.4} height={24} />
                    </div>
                    <p className='text-sm text-[#000] mt-[2px]'>Total Revenues</p>
                    <p className='text-[#000] font-bold text-2xl mt-[5px]'>$2,129,430</p>
                </div>
                <div className="flex-1 px-[25px] py-[20px] bg-[#F4ECDD] rounded-[20px] h-[120px]">
                       <div className='flex justify-end'>
                        <Image alt='image' src="/assets/total_transactions_icon.svg" width={20.4} height={24} />
                    </div>
                    <p className='text-sm text-[#000] mt-[2px]'>Total Transactions</p>
                    <p className='text-[#000] font-bold text-2xl mt-[5px]'>1,520</p>
                </div>
                <div className="flex-1 px-[25px] py-[20px] bg-[#EFDADA] rounded-[20px] h-[120px]">
                       <div className='flex justify-end'>
                        <Image alt='image' src="/assets/Vector (2).svg" width={23.4} height={24} />
                    </div>
                    <p className='text-sm text-[#000] mt-[2px]'>Total Likes</p>
                    <p className='text-[#000] font-bold text-2xl mt-[5px]'>9,721</p>
                </div>                
                <div className="flex-1 px-[25px] py-[20px] bg-[#DEE0EF] rounded-[20px] h-[120px]">
                       <div className='flex justify-end'>
                        <Image alt='image' src="/assets/Vector (3).svg" width={36.4} height={24} />
                    </div>
                    <p className='text-sm text-[#000] mt-[2px]'>Total Users</p>
                    <p className='text-[#000] font-bold text-2xl mt-[5px]'>892</p>
                </div>                                                
            </section>
            <section className='w-full px-[40px] py-[30px] rounded-[20px] bg-[#fff] mt-[40px]'>
            <div className='flex flex-col'>
                    <h5 className='text-lg font-bold text-[#000] mb-[5px]'>
                        Activities
                    </h5>
                    <span className='text-[#858585] text-sm mb-[30px] flex items-center gap-[6px] cursor-pointer'>
                    May - June 2021
                    <Image alt='image' src="/assets/Vector (4).svg" width={8} height={5} />    
                    </span>

                <LineChart />
                </div>
            </section>
            <section className='w-full flex gap-[40px] mt-[40px]'>
                <div className='flex-1 px-[40px] py-[30px] rounded-[20px] bg-[#fff]'>
                    <div className="flex items-center justify-between mb-[20px]">
                        <h5 className='text-lg font-bold text-[#000]'>Top products</h5>
                        <span className='text-xs text-[#858585] flex items-center gap-[6px] cursor-pointer'>
                            May - June 2021
                        <Image alt='image' src="/assets/Vector (4).svg" width={8} height={5} />    
                        </span>
                    </div>
                    <PieChart />
                </div>                
                <div className='flex-1 px-[40px] py-[30px] rounded-[20px] bg-[#fff]'>
                <div className="flex items-center justify-between mb-[20px]">
                        <h5 className='text-lg font-bold text-[#000]'>Today’s schedule</h5>
                        <span className='text-xs text-[#858585] flex items-center gap-[6px] cursor-pointer'>
                            See All
                        <Image alt='image' src="/assets/Vector (5).svg" width={8} height={5} />    
                            </span>
                       
                    </div>
                    <div className="flex flex-col mt-[25px] gap-[13px]">
                            <div className='px-[15px] py-[3px] border-[#9BDD7C] border-l-4'>
                                <p className='font-bold text-sm text-[#666] mb-[5px]'>Meeting with suppliers from Kuta Bali</p>
                            <p className="text-xs text-[#999] mb-[5px]">14.00-15.00</p>
                            <p className="text-xs text-[#999]">at Sunset Road, Kuta, Bali</p>
                            </div>
                            <div className='px-[15px] py-[3px] border-[#6972C3] border-l-4'>
                                <p className='font-bold text-sm text-[#666] mb-[5px]'>Check operation at Giga Factory 1</p>
                            <p className="text-xs text-[#999] mb-[5px]">18.00-20.00</p>
                            <p className="text-xs text-[#999]">at Central Jakarta</p>
                            </div>
                        </div>
                </div>                

            </section>

        </div>
    );
};

export default Dashboard;