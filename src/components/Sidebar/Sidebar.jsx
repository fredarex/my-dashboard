import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Mylinks} from '../../constant/data'
import { logomark_icon,avatar_icon,logout_icon } from '../../constant/image';
import { setActiveMenu, setShowSideMenu } from '../../redux/Features/features.action';

const mapState = (state) => ({
  screenSize: state.features.screenSize,
  activeMenu: state.features.activeMenu
})
function Sidebar({setActiveSideMenu}) {
  const {screenSize,activeMenu} = useSelector(mapState);
  const dispatch = useDispatch();
  const [curLinkData, setCurLinkData] = useState('Dashboard');
  const activeLink = 'flex justify-center items-center w-12 h-12 bg-primary rounded-md mb-2';
  const normalLink = 'flex justify-center items-center w-12 h-12 mb-2';
  const subActiveLink = 'flex items-center w-[249px] h-10 bg-klightpurple rounded-md mb-2 pl-[14px]';
  const subNormalLink = 'flex items-center w-[249px] h-10 mb-2 pl-[14px]';
  const handleCloseSidebar = () => {
    if(activeMenu && screenSize <= 1024) {
      dispatch(setActiveMenu(false));
    }
    
  }
  const handleCurLink = (data) => {
    setCurLinkData(data.title);
  }
  const handleMenuBar = () => {
    if(screenSize <= 1024) {
      dispatch(setShowSideMenu(false));
    }
  }
  return (
    <div className='flex w-[346px] sm:w-[362px] h-full fixed bg-kdarkpurple'>
      <div className='w-[81px] min-h-screen flex flex-col justify-between bg-klightpurple pt-8 pb-6'>
        <div className='flex flex-col items-center'>
          <div className='mb-6'>
            <Link to="/" onClick={handleCloseSidebar} className="">
              <img src={logomark_icon} alt="logo" />
            </Link>
          </div>
          {
            Mylinks.map((data,index) => (data.title !== 'Life Buoy' && data.title !== 'Settings') && 
                (
                  <NavLink
                    to={`/${data.links[0].name}`}
                    key={data.links[0].name}
                    className={({isActive}) => isActive ? activeLink : normalLink}
                    onClick = {() => {handleCurLink(data); handleCloseSidebar();}}
                    end
                  >
                    <img src={data.icon} alt={data.title} />
                  </NavLink>
                )
            )
          }
        </div>
        <div className='flex flex-col items-center'>
        {
          Mylinks.map((data,index) => (data.title === 'Life Buoy' || data.title === 'Settings') && 
            (
              <NavLink
                to={`/${data.links[0].name}`}
                key={data.links[0].name}
                className={({isActive}) => isActive ? activeLink : normalLink}
                onClick = {() => {handleCurLink(data); handleCloseSidebar();}}
                end
              >
                <img src={data.icon} alt={data.title} />
              </NavLink>
            )
          )
          }
          <div className='w-[49px] h-[1px] bg-primary my-6'></div>
          <div onClick = {() => {handleCloseSidebar(); handleMenuBar();}}>
            <img src={avatar_icon} alt="user" />
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-between mx-4 mt-9 mb-6'>
        <div>
          {
            Mylinks.map((data,index) => data.title === curLinkData && 
              (
                <div className='text-kbody5'>
                  <div className='text-white mb-4'>{data.title}</div>
                  {
                    data.links.map((link,index) => (
                      <NavLink 
                        to={`/${link.name}`}
                        key={link.name}
                        className={({isActive}) => isActive ? subActiveLink : subNormalLink}
                        onClick = {() => {handleCloseSidebar(); handleMenuBar();}}
                      >
                        <img className='mr-[14px]' src={link.icon} alt={link.name} />
                        <span className='text-kgrayprimary font-Inter font-medium'>{link.name}</span>
                      </NavLink>
                    ))
                  }
                </div>
              )
            )}
        </div>
        <div className='flex justify-between text-[14px]'>
          <div>
            <h6 className='text-white font-medium'>Tofunmi Sojimi</h6>
            <span className='text-[#E9D7FE] font-normal'>tofunmisojimi@untitledui.com</span>
          </div>
          <div>
            <img src={logout_icon} alt="logout icon" />
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Sidebar