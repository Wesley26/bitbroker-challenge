import React from 'react';

function NavHeader() {
    return (
    <div>
        <nav>
        <ul className="pb-3 text-lg text-center grid grid-cols-3 w-64">
            <li className="border-white border-solid border-b-2 h-10 w-16">
                <a href="https://www.remoteroofing.com/">Home</a>
            </li>
            <li className="h-12 w-16">
                <a href="https://www.remoteroofing.com/faq">FAQ</a>
            </li>
            <li className="h-12 w-16">
                <a href="https://www.remoteroofing.com/#roof-repair-services">Services</a>
            </li>
        </ul>
        </nav>
    </div>
    );
  };
  
  export default NavHeader;