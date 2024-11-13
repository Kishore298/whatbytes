import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white text-black sticky top-0 z-10  border-b border-gray-400">
      <div className="flex items-center space-x-2">
        <Image src="/logo.webp" alt="Logo" width={40} height={40} />
        <span className="text-2xl font-bold">WhatBytes</span>
      </div>
      <div className="flex items-center space-x-4">
        <Image
          src="/profile.webp"
          alt="Profile"
          width={20}
          height={20}
          className="rounded-full"
        />
        <span className='text-lg'>Kishore</span>
      </div>
    </nav>
  );
}


  