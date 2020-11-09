Bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Implements [TailwindCSS](https://tailwindcss.com/), [PostCSS](https://postcss.org/), [react-cool-onclickoutside](https://www.npmjs.com/package/react-cool-onclickoutside), and [Google Maps Places API Autocomplete for React Hooks](https://reactjsexample.com/react-hook-for-google-maps-places-autocomplete/).

# Info
- This is my project submission for the BitBucket challenge to re-create the top header portion of [the following Remote Roofing website here](https://www.remoteroofing.com). This project reached MVP (Minimum Viable Product stage) on November 8th, 2020. Video submission file can be downloaded under src/videoSubmission directory.


# Repo content
### node_modules
- Contains all project npm package dependencies.


### public
- **index.html** Index page for this website. React hooks into the div root, the Google Maps Places API is called from this page.
- **manifest.json** React config file.
- **robots.txt** React config file.


### root of repo
- Root of repo Contains: 
- **package-lock.json, package.json**: npm script/dependencies
- **postcss.config.js**: PostCSS configuration file
- **tailwind.config.js**: TailwindCSS configuration file, controls which CSS classes to generate; purge CSS classes that are not used in src JS files.
- **.gitignore**: gitignore file for the entire repo


### src
- Root directory of src folder contains:
- **tailwind.css**: ignored file, all generated CSS classes are stored here, any manually created CSS classes are extended in tailwind.config.js file.
- **setupTests.js**: React config file.
- **reportWebVitals.js**: React config file.
- **index.js**: Index JS file for entire react app, grabs div element root from index.html and renders all web components.
- **index.css**: Index CSS file for entire react app, imports tailwind.css base, components, and utility tailwind CSS classes.
- **App.test.js**: React config/testing file.
- **App.js**: First web component layer.


### components
- Note: All React web components are designed to render the original website's header given to me as per instructions with desktop/tablet/mobile screen size dimension compatibility to 90% accuracy.
- **Header.js**: Web component which imports the four sub header web components for the entire header in folder subHeaderComponents.


### subHeaderComponents
- **TopHeader.js**: Top section of the header, renders Remote Roofing logo and phone number.
- **NavHeader.js**: Navigational section of the header, renders the Home, FAQ, and Services pages. For this project as only the header is being rendered per instructions given to me, all links route back to [the original website](https://www.remoteroofing.com).
- **MidHeader.js**: Mid section of the header, imports two web components from the subMidHeaderComponents folder.
- **BottomHeader.js**: Bottom section of the header, renders the blue box which contains the original site's keywords: Free Inspection, File a Claim, and Replace or Repair Roof.


### subMidHeaderComponents
- **MidTitleHead.js**: Renders the title text Free Roof Repair Inspection & Local Roofing Quote and Get your roof inspected remotely and connect with our trusted roofers
- **MidGetInspection.js**: Renders the Get Inspection search bar and button, imports the Google Maps Places API autofill web component hook here.