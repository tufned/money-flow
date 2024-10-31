import '~/styles/index.scss';
import { ReactNode } from 'react';
import { metaData } from '~/constants/metadata';
import Navbar from '~/components/navbar/Navbar';

export const metadata = metaData;

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default MainLayout;
