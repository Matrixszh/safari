'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface ButtonCreativeRightProps {
  label?: string;
  href?: string;
  className?: string;
}

function ButtonCreativeRight({ label = 'About', href = '#', className = '' }: ButtonCreativeRightProps) {
  return (
    <Link href={href} className={className}>
      <div className='group relative cursor-pointer p-2 w-38 border bg-white rounded-full overflow-hidden text-black text-center font-semibold shadow-sm hover:shadow-md transition-shadow duration-300'>
        <span className='translate-x-1 group-hover:translate-x-12 group-hover:opacity-0 transition-all duration-300 inline-block'>
          {label}
        </span>
        <div className='flex gap-2 text-white z-10 items-center absolute top-0 h-full w-full justify-center translate-x-12 opacity-0 group-hover:-translate-x-1 group-hover:opacity-100 transition-all duration-300'>
          <span>{label}</span>
          <ArrowRight className="w-4 h-4" />
        </div>
        <div className='absolute top-[40%] left-[20%] h-2 w-2 group-hover:h-full group-hover:w-full rounded-lg bg-black scale-[1] group-hover:bg-gradient-to-r group-hover:from-[#F7E07E] group-hover:via-[#D4AF37] group-hover:to-[rgb(140,109,31)] group-hover:scale-[1.8] transition-all duration-300 group-hover:top-[0%] group-hover:left-[0%] '></div>
      </div>
    </Link>
  );
}

export default ButtonCreativeRight;
