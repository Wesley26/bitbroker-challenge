import React from 'react';
import TopHeader from './subHeaderComponents/TopHeader';
import NavHeader from './subHeaderComponents/NavHeader';
import MidHeader from './subHeaderComponents/MidHeader';
import BottomHeader from './subHeaderComponents/BottomHeader';

function Header() {
    return (
      <div className="flex justify-center pb-64 text-white overflow-hidden">
        <div className="bg-header-color flex w-2/6">
        </div>
          <header className="bg-header-color h-space2 w-full">

          <TopHeader />
          <NavHeader />
          <MidHeader />
          <BottomHeader />

          </header>
        <div className="bg-header-color flex w-2/6">
        </div>
      </div>
    );
};
  
export default Header;