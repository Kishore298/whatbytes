"use client";

import { FontAwesomeIcon } from 'react-fontawesome';
import { faWater, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 bg-white text-black sticky top-0 z-10 border-b border-gray-400">
      <div className="flex items-center space-x-2 ml-6">
        {/* Logo Section */}
        <FontAwesomeIcon icon={faWater} size="2x" className="text-gray-500" />
        <span className="text-2xl font-bold">WhatBytes</span>
      </div>
      <div className="flex items-center space-x-4 p-2 border-2 mr-4 border-gray-400 rounded-full">
        {/* Profile Section */}
        <FontAwesomeIcon icon={faUser} size="lg" className="rounded-full" />
        <span className="text-lg">Kishore</span>
      </div>
    </nav>
  );
}



  