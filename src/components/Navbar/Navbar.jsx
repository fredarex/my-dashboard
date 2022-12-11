import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logomark_icon,hamburger_icon } from '../../constant/image';
import { setActiveMenu, setScreenSize, setShowSideMenu} from '../../redux/Features/features.action';
import Sidebar from '../Sidebar/Sidebar';

const mapState = (state) => ({
  screenSize: state.features.screenSize,
  activeMenu: state.features.activeMenu,
  showSideMenu: state.features.showSideMenu,
})
function Navbar() {
  const {screenSize,showSideMenu} = useSelector(mapState);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleResize = () => dispatch(setScreenSize(window.innerWidth));
    window.addEventListener('resize',handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);

    }
  },[]);
  useEffect(() => {
      if(screenSize <= 1024){
        dispatch(setActiveMenu(false));
      }else {
        dispatch(setActiveMenu(true));
        dispatch(setShowSideMenu(false));
      }
  },[screenSize]); 
  const handleMenuBar = () => {
    dispatch(setShowSideMenu(!showSideMenu))
  }
  return (
    <>
      <div className='w-full h-full flex justify-between items-center'>
        <div className='flex items-center'>
          <img className='mr-[9px]' src={logomark_icon} alt="logo " />
          <span>Untitled UI</span>
        </div>
        <div onClick={handleMenuBar}>
          <img src={hamburger_icon} alt="hamburger menu" />
        </div>
      </div>
      
      
    </>
  )
}

export default Navbar