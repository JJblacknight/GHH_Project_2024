import React from 'react';
import Navbar from './Navbar';

type Props = {};

export default function NavbarContainer({}: Props) {
  return (
    <>
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center justify-center">
          <Navbar />
        </div>
      </div>
      <div className="pt-16"> {/* Adjust the padding as needed */}
        {/* Content goes here */}
      </div>
    </>
  );
}