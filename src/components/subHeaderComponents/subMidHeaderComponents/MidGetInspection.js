import React from 'react';

/**
 * NOTE: Be sure your input has an onChange= when implementing autofill for the input
 */

function MidGetInspection() {
    return(
        <div className="bg-white mt-4 mb-4 h-space4 w-space3 rounded-full">
            <div className="flex justify-start mt-2 shadow-base">
                <img
                    src="https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f5a6d20aa3c71469c732751_blue-home-pin.png"
                    alt="null"
                    className="mt-3 ml-3 h-6 w-7"
                >
                </img>
                <input
                    type="text"
                    maxLength="256"
                    name="addressBar"
                    placeholder="Your Address"
                    className="text-black mt-1 ml-3 mb-2 p-3 h-10 w-64 rounded-sm"
                >
                </input>
                <div className="bg-get-inspect-btn h-12 w-space5 text-center shadow-base rounded-full">
                    <div className="pb-3">
                    </div>
                    <a
                        href="https://www.remoteroofing.com/#roof-repair-services"
                        className="text-white"
                    >
                        Get Inspection
                    </a>
                </div>
            </div>
        </div>  
    )
}

export default MidGetInspection;