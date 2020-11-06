import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

function TopHeader() {
    return (
    <div className="pb-10 font-bold grid grid-cols-3 relative top-0 left-0">
        <div className="flex justify-start">
            <FontAwesomeIcon 
                icon={faWifi}
                className="h-12 w-3/12"
            />
            <h1 className="text-center pl-3 h-12 w-16">
                Remote Roofing
            </h1>
        </div>
        <div>
            <br></br>
        </div>
        <div className="flex justify-end">
            <FontAwesomeIcon
                icon={faPhoneAlt}
                className="h-auto w-2/12"
            />
            <h1 className="pt-4 text-center h-16 w-6/12">
                +1 (800) 401-7716
            </h1>
        </div>
    </div>
    );
  };
  
  export default TopHeader;
