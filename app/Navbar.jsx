"use client";

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWater, faUser } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function Navbar() {
  const [logoError, setLogoError] = useState(false);
  const [profileError, setProfileError] = useState(false);

  const handleLogoError = () => setLogoError(true);
  const handleProfileError = () => setProfileError(true);

  return (
    <nav className=" w-full flex items-center justify-between  py-4 bg-white text-black sticky top-0 z-10 border-b border-gray-400">
      <div className="flex items-center space-x-2 ml-6">
        {/* Logo Section */}
        {logoError ? (
          <FontAwesomeIcon icon={faWater} size="2x" className="text-gray-500" />
        ) : (
          <Image
            src="/logo.webp"
            alt="Logo"
            width={40}
            height={40}
            onError={handleLogoError} // Fallback to icon on error
          />
        )}
        <span className="text-2xl font-bold">WhatBytes</span>
      </div>
      <div className="flex items-center space-x-4 p-2 border-2 mr-4 border-gray-400 rounded-full">
        {/* Profile Section */}
        {profileError ? (
          <FontAwesomeIcon icon={faUser} size="lg" className="rounded-full" />
        ) : (
          <Image
            src="/profile.webp"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
            onError={handleProfileError} // Fallback to icon on error
          />
        )}
        <span className="text-lg">Kishore</span>
      </div>
    </nav>
  );
}



  