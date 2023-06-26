"use client";
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

const SideBar = () => {
const handleSignout = (e)=>{
  e.preventDefault();
  signOut({ callbackUrl: '/signin' });
}
  return (
    <div className="bg-[#000] fixed py-[4vh] px-[4vh] text-white w-[18%] rounded-[30px] m-[25px] h-[-webkit-fill-available] flex flex-col">
      <div className="">
        <Link href="/" className="text-4xl font-bold">Board.</Link>
      </div>
      <nav className="flex-1 mt-[5vh]">
        <ul className="space-y-2">
          <li>
            <Link className="block flex items-center focus:font-bold gap-[20px] text-lg py-[1.5vh]" href="#">
                <Image src="/assets/dashboard_icon.svg" width={16} height={16} alt='image' />
            Dashboard
            </Link>
          </li>
          <li>
            <Link href="#" className="block flex items-center focus:font-bold gap-[20px] text-lg py-[1.5vh]">
                <Image src="/assets/transaction_icon.svg" width={16} height={16} alt='image' />
            Transactions
            </Link>
          </li>
          <li>
            <Link href="#" className="block flex items-center focus:font-bold gap-[20px] text-lg py-[1.5vh] ">
                <Image src="/assets/schedule_icon.svg" width={16} height={16} alt='image' />
            Schedules
            </Link>
          </li>
          <li>
            <Link href="#" className="block flex items-center focus:font-bold gap-[20px] text-lg py-[1.5vh]">
                <Image src="/assets/user_icon.svg" width={16} height={16} alt='image' />
            Users
            </Link>
          </li>
          <li>
            <Link href="#" className="block flex items-center focus:font-bold gap-[20px] text-lg py-[1.5vh]">
                <Image src="/assets/setting_icon.svg" width={16} height={16} alt='image' />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
      <div>
      <button onClick={handleSignout} className="block border-0 outline-none bg-transparent text-sm">
            Sign Out
            </button>
            <Link href="#" className="block mt-[3%] text-sm">
            Help
            </Link>
            <Link href="#" className="block mt-[3%] text-sm">
            Contact Us
            </Link>
      </div>
    </div>
  );
};

export default SideBar;
