import React from 'react';
import logo from './logo.svg';
import img2 from './img/work.jpeg'
// import './App.less'

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
        <div className = "p-6 bg-gray-400">
          <img className="h-12" src={logo} alt="logo" />
        </div>
      
        <div className="text-center"> 
          <h1 className=" mt-6 font-bold text-gray-900 leading-tight">Take advantage of it <span className="text-indigo-500">okay</span></h1>
          <a href="#" className="inline-block text-white bg-indigo-500 px-4 py-2 mt-6 rounded-lg shadow-lg uppercase tracking-wider font-semibold text-sm"> Book Tour</a>
        </div>
       
    </div>
  );
}

export default App;
