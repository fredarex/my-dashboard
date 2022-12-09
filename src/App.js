import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import Details from './pages/Details/Details';

function App() {
  const [activeMenu, setActiveMenu] = useState(true);
  return (
    <>
      <div className='flex relative'>
        {
          activeMenu ? (
            <div className='w-[362px] h-full fixed bg-kdarkpurple'>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-black'>
              <Sidebar />
            </div>
          )
        }
        <div className={
                activeMenu ? 'min-h-screen md:ml-[362px] w-full': 'min-h-screen w-full'
              }>
          {!activeMenu && 
          <div className='fixed w-full md:static'>
            <Navbar /> 
          </div>
          }
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path='/' element={<Dashboard />} />
              <Route path='/overview' element={<Dashboard />} />
              <Route path='/My details' element={<Details />} />
              {/* Chart */}
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
