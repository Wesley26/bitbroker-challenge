import React from 'react';
import MidTitleHead from './subMidHeaderComponents/MidTitleHead';
import MidGetInspection from './subMidHeaderComponents/MidGetInspection';

function MidHeader() {
    return (
        <div>
            <div className="grid grid-rows-3">
                <MidTitleHead />
                <MidGetInspection />
            </div>
        </div>
    );
};
  
export default MidHeader;