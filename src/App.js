import React from 'react';
import './index.css';
import './tailwind.css';

import Header from "./components/Header.js";

function App() {
  return (
    <div className="bg-body-color absolute bottom-0 top-0 left-0 right-0">

      <main className="bg-body-color font-body">

        <Header />

      </main>

    </div>
  );
};

export default App;
