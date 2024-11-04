import '~/styles/index.scss';
import { ReactNode } from 'react';
import { metaData } from '~/constants/metadata';
import Header from '~/components/header/Header';

export const metadata = metaData;

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col'>
      <Header />
      <div className='w-full flex items-center justify-center'>{children}</div>
    </div>
  );
};

export default MainLayout;
