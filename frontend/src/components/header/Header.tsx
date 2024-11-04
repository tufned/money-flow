'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { pagesTitles } from '~/constants/pages-titles';

const Header = () => {
  type PageKey = keyof typeof pagesTitles;
  const isValidPageKey = (key: string): key is PageKey => key in pagesTitles;

  const pathname = usePathname();
  const routeKey = pathname.substring(1);

  const currentPageTitle = isValidPageKey(routeKey) ? pagesTitles[routeKey] : null;

  return (
    <div className='flex items-center justify-between h-1/6 min-h-36 w-full px-4'>
      <h1 className='font-bold text-3xl'>{currentPageTitle}</h1>
    </div>
  );
};

export default Header;
