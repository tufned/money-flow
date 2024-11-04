'use client';

import HomeIcon from '~/assets/icons/home.svg';
import NotesIcon from '~/assets/icons/notes.svg';
import ReportIcon from '~/assets/icons/financial-report.svg';
import LogOutIcon from '~/assets/icons/log-out.svg';
import UserIcon from '~/assets/icons/user-circle.svg';
import BellIcon from '~/assets/icons/bell.svg';
import SettingsIcon from '~/assets/icons/settings.svg';

import React from 'react';
import styles from '~/components/navbar/Navbar.module.scss';
import { pagesTitles } from '~/constants/pages-titles';
import Link from 'next/link';
import { routes } from '~/constants/routes';
import { usePathname } from 'next/navigation';
import { Routes } from '~/types/common';
import Tooltip from '~/components/ui/tooltip/Tooltip';

const Navbar = () => {
  const pathname = usePathname();

  const generateLinkClasses = (route: Routes) =>
    `${styles.navbarItem} ${pathname === route ? styles.navbarItemActive : ''}`;

  return (
    <div className='h-screen w-40 flex flex-col justify-between items-center py-10'>
      <div className='font-black text-base leading-5 text-center'>
        Money <br />
        Flow
      </div>
      <div className='flex flex-col justify-between h-[86%]'>
        <nav className='flex flex-col justify-between gap-2.5'>
          <section className={styles.navbar}>
            <Tooltip text={pagesTitles.home} position='right'>
              <Link href={routes.index} className={generateLinkClasses(routes.index)}>
                <HomeIcon className={`h-[25px] w-[25px] ${styles.homeIcon}`} />
              </Link>
            </Tooltip>
            <Tooltip text={pagesTitles.notes} position='right'>
              <Link href={routes.notes} className={generateLinkClasses(routes.notes)}>
                <NotesIcon className={`h-[27px] w-[27px] ${styles.notesIcon}`} />
              </Link>
            </Tooltip>
            <Tooltip text={pagesTitles.report} position='right'>
              <Link href={routes.report} className={generateLinkClasses(routes.report)}>
                <ReportIcon className={`h-[25px] w-[25px] ${styles.reportIcon}`} />
              </Link>
            </Tooltip>
          </section>
          <section className={styles.navbar}>
            <div className={styles.navbarItem}>
              <BellIcon className={`h-[24px] w-[24px] ${styles.bellIcon}`} />
            </div>
            <div className={styles.navbarItem}>
              <SettingsIcon className={`h-[24px] w-[24px] ${styles.settingsIcon}`} />
            </div>
          </section>
        </nav>
        <section className={styles.navbar}>
          <div className={styles.navbarItem}>
            <LogOutIcon className={`h-[25px] w-[25px] ${styles.signOutIcon}`} />
          </div>
          <Tooltip text={pagesTitles.profile} position='right'>
            <Link href={routes.profile} className={generateLinkClasses(routes.profile)}>
              <UserIcon className={`h-[30px] w-[30px] ${styles.userIcon}`} />
            </Link>
          </Tooltip>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
