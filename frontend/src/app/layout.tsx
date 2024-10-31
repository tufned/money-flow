import '~/styles/index.scss';
import { ReactNode } from 'react';
import { metaData } from '~/constants/metadata';

export const metadata = metaData;

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='uk'>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
