import React from 'react'
import { colon_icon, greenchart, redchart } from '../../constant/image'
import {FaArrowDown,FaArrowUp} from 'react-icons/fa'
function Card({data}) {
  return (
    <div className='w-full sm:w-[30%] mb-5 sm:mb-0'>
        <div className='w-full min-h-[196px] rounded-lg px-4 sm:px-6 py-5 sm:py-6 shadow-[0_1px_3px_rgba(16,24,40,0.1),0px_1px_2px_rgba(16,24,40,0.06)]'>
            <div className='flex justify-between'>
                <div className='text-kblack1 text-kbody5 font-medium'>{data.title}</div>
                <img className='cursor-pointer' src={colon_icon} alt="more icon" />
            </div>
            <div className='text-black1 font-semibold text-kbody3 sm:text-[36px] mt-5 sm:mt-6'>
                {data.amount}
            </div>
            <div className='flex justify-between items-end flex-row sm:flex-col xl:flex-row'>
                <div  className='flex text-kbody6'>
                    <div className={data.percentage <= 10 ? 'text-[#B42318] mr-2':'text-[#027A48] mr-2'}>
                        {data.percentage <= 10 ? (
                            <div className='flex items-center text-kbody6'>
                                <FaArrowDown className='mr-2' size={14}  />
                                {data.percentage}
                            </div>
                        ):
                            <div className='flex items-center text-kbody6'>
                                <FaArrowUp className='mr-2' size={14} />
                                {data.percentage}
                            </div>
                        }
                    </div>
                    <div className='text-kdarkgray font-medium sm:w-[70px]'>vs last month</div>
                </div>
                <div className='ml-3'>
                    {data.percentage <= 10 ? 
                    (
                        <img src={redchart} alt="red chart " />
                    ):
                    (
                        <img src={greenchart} alt="green chart" />
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card