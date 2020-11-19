import React from 'react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';

function MidGetInspection() {

    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions
    } = usePlacesAutocomplete({
        requestOptions: { /* Define search scope here; search scope does not need to be defined. */ },
        debounce: 300
    });

    const registerRef = useOnclickOutside(() => {
        // When user clicks outside of the component, we can dismiss
        // the searched suggestions by calling this method
        clearSuggestions();
    });

    const handleInput = e => {
        // Update the keyword of the input element
        setValue(e.target.value);
    };

    const handleSelect = ({ description }) => () => {
        // When user selects a place, we can replace the keyword without request data from API
        // by setting the second parameter as "false"
        setValue(description, false);
        clearSuggestions();

        // Get latitude and longitude via utility functions
        getGeocode({ address: description })
            .then(results => getLatLng(results[0]))
            .then(({ lat, lng }) => {
                console.log('Coordinates: ', { lat, lng });
            }).catch(error => {
                console.log('Error: ', error)
            });
    };

    const renderSuggestions = () =>
        data.map(suggestion => {
            const {
                id,
                structured_formatting: { main_text, secondary_text }
            } = suggestion;

            return (
                <li
                    key={id}
                    onClick={handleSelect(suggestion)}
                    className="bg-gray-200 p-1 flex justify-start w-space3 rounded-md"
                >
                    <strong className="text-black text-sm">
                        <button><p><b>{main_text}</b></p></button>
                    </strong> 
                    <small className="text-black text-sm">
                        <button><p className="pl-3">{secondary_text}</p></button>
                    </small>
                </li>
            );
    });

    return(
        <div>
        <div className="sm:visible md:hidden mt-32">

        </div>
        <div className="bg-white mt-4 mb-4 h-space4 w-space3 rounded-full">
            <div className="flex justify-start pt-2 shadow-base">
                <img
                    src="https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f5a6d20aa3c71469c732751_blue-home-pin.png"
                    alt="null"
                    className="mt-1 mb-2 ml-3 h-10 w-7"
                >
                </img>
                <div 
                    ref={registerRef} 
                    className="w-space7"
                >
                    <input
                        type="text"
                        value={value}
                        onChange={handleInput}
                        disabled={!ready}
                        maxLength="256"
                        name="addressBar"
                        placeholder="Your Address"
                        className="text-black mt-1 ml-3 mb-2 p-3 h-10 w-64 rounded-sm"
                    />
                    {status === 'OK' && <ul>{renderSuggestions()}</ul>}
                </div>
                <div className="h-12 w-6 pr-3">
                </div>
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
        </div>
    )
};

export default MidGetInspection;