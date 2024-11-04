import '~/styles/index.scss';
import { ReactNode } from 'react';
import { metaData } from '~/constants/metadata';
import Navbar from '~/components/navbar/Navbar';

export const metadata = metaData;

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='uk'>
      <body className='bg-secondaryLight'>
        <div className='flex h-screen w-screen'>
          <Navbar />
          <main className='w-full'>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
