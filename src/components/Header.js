import React from 'react';
import TopHeader from './subHeaderComponents/TopHeader';
import NavHeader from './subHeaderComponents/NavHeader';
import MidHeader from './subHeaderComponents/MidHeader';

function Header() {
    return (
      <div className="pb-64 text-white">
        <header className="pl-space1 pr-space1 bg-header-color h-space2 w-full">

        <TopHeader />
        <NavHeader />
        <MidHeader />

        </header>
      </div>
    );
};
  
export default Header;