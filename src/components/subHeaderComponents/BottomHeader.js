import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSatellite, faPaste, faTools } from '@fortawesome/free-solid-svg-icons'

function BottomHeader() {
    return (
        <div className="invisible md:visible mb-32">
          <div className="bg-bottom-header-box flex justify-center h-40 w-full rounded-lg shadow-md">
            <div className="flex justify-center w-full">

              <div className="mt-10 ml-12 flex w-full">
                  <FontAwesomeIcon 
                      icon={faSatellite}
                      className="text-header3 ml-6 h-16 w-16"
                  />
                  <div className="mt-3 ml-5 pr-16 h-16 w-14">
                    Free Inspection
                  </div>
              </div>

              <div className="mt-10 ml-12 flex w-full">
                  <FontAwesomeIcon 
                      icon={faPaste}
                      className="text-header3 h-16 w-16"
                  />
                  <div className="mt-3 ml-5 h-16 w-32">
                    File a Claim
                  </div>
              </div>

              <div className="mt-10 ml-12 flex w-full">
                  <FontAwesomeIcon 
                      icon={faTools}
                      className="text-header3 ml-6 h-16 w-16"
                  />
                  <div className="mt-3 ml-5 pr-16 h-16 w-48">
                    Replace or Repair Roof
                  </div>
              </div>

            </div>
          </div>
        </div>
    )
}

export default BottomHeader;