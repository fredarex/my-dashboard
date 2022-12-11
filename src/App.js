import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import Details from './pages/Details/Details';
import Error from './pages/Error/Error';

const mapState = state => ({
  activeMenu: state.features.activeMenu,
  showSideMenu: state.features.showSideMenu
});
function App() {
  const {activeMenu,showSideMenu} = useSelector(mapState);
  return (
    <>
      <div className='flex relative min-h-screen'>
        {
          activeMenu ? (
            <div className=''>
              <Sidebar />
            </div>
          ) :
          <div className={showSideMenu ? 'block absolute top-0 left-0 z-[999]': 'hidden'}>
            <Sidebar />
          </div>
        }
        <div className={
                activeMenu ? 'min-h-screen md:ml-[362px] w-full': 'w-full'
              }>
          {!activeMenu ?
          <div className='z-[99] fixed items-center w-full h-16 bg-white px-4 sm:px-8 shadow-[0px_1px_3px_rgba(16,24,40,0.1),0px_1px_2px_rgba(16,24,40,0.06)]'>
            <Navbar /> 
          </div>
          : 
          <span className='w-0 h-0 hidden'>
            <Navbar />
          </span>
          }
          <div className='min-h-screen'>
            <Routes>
              {/* Dashboard */}
              <Route path='/' element={<Dashboard />} />
              <Route path='/Overview' element={<Dashboard />} />
              <Route path='/My details' element={<Details />} />
              {/* Chart */}
              <Route path='/*' element={<Error />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}



export default App;
