import React from 'react';
import { Camera, Utensils, MapPinHouse } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="w-full h-full max-w-lg bg-primary-foreground flex justify-center items-center px-4 py-2 rounded-xl border m-4">
      <div className="flex justify-center items-center gap-4">
        {/* Restaurant */}
        <Link href="#restaurant">
          <Button variant="ghost" size="icon">
            <Utensils />
          </Button>
        </Link>
        {/* Picture */}
        <Link href="#picture">
          <Button variant="ghost" size="icon">
            <Camera />
          </Button>
        </Link>
        {/* Address */}
        <Link href="#address">
          <Button variant="ghost" size="icon">
            <MapPinHouse />
          </Button>
        </Link>
      </div>
    </div>
  );
}