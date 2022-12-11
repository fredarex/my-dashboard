import React from 'react'
import {error_icon} from '../../constant/image';
function Error() {
  return (
    <div className='flex flex-col justify-center items-center w-full min-h-screen bg-[#F9FAFB]'>
        <img className='w-[300px] sm:[350px]' src={error_icon} alt="404" />
        <div className='text-kbody3 font-medium'>Page Not Found</div>
    </div>
  )
}

export default Error