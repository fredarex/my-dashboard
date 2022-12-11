import React from 'react'
import {upload_icon,calendar_icon,filter_icon} from '../../constant/image';
import {FaPlus,FaSearch} from 'react-icons/fa'
import { customersCardData } from '../../constant/data';
import Card from '../../components/Card/Card';
import { useSelector } from 'react-redux';
import Datatable from '../../components/Table/Table';
const mapState = state => ({
  activeMenu: state.features.activeMenu
});
function Dashboard() {
  const {activeMenu} = useSelector(mapState);
  return (
    <div className={!activeMenu ? 'min-h-screen mt-24 px-4 sm:px-8 ':'min-h-screen pt-8 pb-12 px-4 sm:px-8'}>
      <div className='flex flex-col lg:flex-row justify-between'>
        <div>
          <h2 className='text-kbody4 sm:text-kbody3 text-kblack1 font-medium'>Welcome back, Tofunmi</h2>
          <p className='text-kbody5 text-kdarkgray font-normal'>Track, manage and forecast your customers and orders.</p>
        </div>
        <div className='flex mt-4 lg:mt-0'>
          <div className='flex justify-between  items-center w-[105px] h-10 px-4 border border-[#D0D5DD] rounded-lg cursor-pointer text-kbody6'>
            <img className='pr-2' src={upload_icon} alt="upload icon" />
            <span>import</span>
          </div>
          <div className='flex  justify-between items-center w-[88px] h-10 ml-3 px-5 bg-primary text-white text-kbody6 rounded-lg'>
            <FaPlus className='mr-3 w-3' />
            <span>Add</span>
          </div>
        </div>
      </div>
      {/* cards */}
      <div className='flex justify-between mt-8 flex-col sm:flex-row'>
          {
            customersCardData.map((data,index) => {
              return (
                <Card key={index} data={data} />
              )
            })
          }
      </div>
      {/* Search  */}
      <div className='flex  flex-col sm:flex-row justify-between sm:items-center  sm:bg-[#F9FAFB] mt-8 min-h-[68px] sm:px-4 rounded-xl'>
        <div className='flex items-center w-[100%] sm:w-[37%] min-h-[44px] mb-4 sm:mb-0 bg-white border border-[#D0D5DD] rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)]'>
          <FaSearch color={'#667085'} className='ml-4 mr-[10px]' />
          <input className='w-full h-full outline-none border-none rounded-lg' placeholder='Search for trades' />
        </div>
        <div className='flex ml-0 sm:ml-2'>
          <div className='flex items-center min-h-[40px]  border px-[18px] rounded-lg border-[#D0D5DD]'>
            <div className='mr-[10px]'>
              <img src={calendar_icon} alt="calendar icon" />
            </div>
            <div className='text-kbody6'>
              Jan 6, 2022 – Jan 13, 2022
            </div>
          </div>
          <div className='flex items-center justify-center w-[40px] sm:w-[102px] min-h-[40px] border rounded-lg ml-3 sm:pr-[10px] sm:pl-[18px] border-[#D0D5DD]'>
            <img className='w-5 sm:mr-[10px]' src={filter_icon} alt="filter icon" />
            <span className='text-kbody6 font-medium hidden sm:block'>Filter</span>
          </div>
        </div>
        
      </div>
      <div className='mt-6'>
        <Datatable />
      </div>
      
    </div>
  )
}

export default Dashboard