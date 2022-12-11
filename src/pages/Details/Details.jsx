import React, { useState } from 'react'
import Button from '../../components/Button/Button';
import {profile,email_icon, avatar_icon,upload_doc_icon,usa_icon} from '../../constant/image';
import {FiUserPlus} from 'react-icons/fi';
import {RiArrowDownSLine} from 'react-icons/ri';
import {AiOutlineClockCircle,AiOutlineItalic,AiOutlineBold} from 'react-icons/ai';
import {MdFormatListNumbered,MdOutlineLink} from 'react-icons/md';
import {TfiMenuAlt} from 'react-icons/tfi';

function Details() {
  const [userName, setUsername] = useState('Tofunmi');
  const [available, setAvailable] = useState(true);
  return (
    <div className='w-full min-h-full relative overflow-hidden bg-[#F9FAFB] '>
      <div className={`h-[240px] bg-no-repeat bg-cover bg-[url('./assets/images/detail-header-bg.svg')]`}></div>
      <div className='min-h-screen px-4 sm:px-7 -z-20 sm:z-0'>
        <div>
          <div className='w-[95%] flex flex-col sm:flex-row sm:justify-between sm:items-center absolute top-[11.2%] left-[2%] sm:top-[12%]'>
            <div className='flex flex-col sm:flex-row sm:items-center relative'>
              <img className='w-[96px] sm:w-[160px] sm:h-[160px] mr-5' src={profile} alt="profile" />
              <div>
                <h4 className='text-kbody4 sm:text-kbody3 text-kblack1 font-medium'>Tofunmi Sojimi</h4>
                <p className='text-kbody5 text-kdarkgray'>tofunmi@untitledui.com</p>
              </div>
            </div>
            <div className='flex sm:ml-3 mt-4 sm:mt-0'>
              <Button mywidth={'w-[99px]'} myheight={'h-[40px]'} mybg={'bg-[#fff]'} mycolor={'text-kblack2'}>
                <div className='w-[99px] h-[40px] flex justify-center items-center text-kbody6'>
                  <FiUserPlus className='mr-2 ' />
                  <span>share</span>
                </div>
              </Button>
              <div className='ml-3'>
                <Button mywidth={'w-[112px]'} myheight={'h-[40px]'} mybg={'bg-[#7F56D9]'} mycolor={'text-[#fff]'}>
                  View profile
                </Button>
              </div>
              
            </div>
          </div>
          {/* personal info  */}
          <div className='w-full flex flex-col sm:flex-row mt-[220px] sm:mt-[150px]'>
            <div className='xl:w-[386px] text-kbody6 gap-2'>
              <div className='font-medium text-kblack2'>Personal info</div>
              <p className='text-kdarkgray'>Update your photo and personal details.</p>
            </div>
            <div className='w-full pt-6 pb-4 mt-5 sm:mt-0 bg-white shadow-[0px_1px_3px_rgba(16,24,40,0.1),0px_1px_2px_rgba(16,24,40,0.06)] rounded-lg'>
              <form>
                <div className='px-6'>
                  <div className='flex'>
                    <div className='w-full mr-6'>
                      <label className='text-kblack2 text-kbody6 font-medium'>First name</label>
                      <div className='w-full h-[44px] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border rounded-lg border-[#D0D5DD]'>
                        <input className='w-full h-full rounded-lg border-none outline-none px-[14px]' value={userName} onChange={(e) => setUsername(e.target.value)}  />
                      </div>
                    </div>
                    <div className='w-full'>
                      <label className='text-kblack2 text-kbody6 font-medium'>Last name</label>
                      <div className='w-full h-[44px] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border rounded-lg border-[#D0D5DD]'>
                        <input className='w-full h-full rounded-lg border-none outline-none px-[14px]' value='Sojimi'  />
                      </div>
                    </div>
                  </div>
                  <div className='mt-6'>
                    <label className='text-kblack2 text-kbody6 font-medium'>Email</label>
                    <div>
                      <div className='flex justify-center items-center w-full h-[44px] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border rounded-lg border-[#D0D5DD]'>
                        <img className='ml-[15px]' src={email_icon} alt="email icon" />
                        <input className='w-full h-full rounded-lg border-none outline-none px-[14px]' value="olivia@untitledui.com"  />
                      </div>
                    </div>
                  </div>
                  <div className='flex mt-6'>
                    <img className='w-16 h-16' src={avatar_icon} alt="user" />
                    <div className='w-full min-h-[126px] ml-5 border rounded-lg border-[#EAECF0]'>
                      <div className='flex flex-col px-1 justify-center items-center'>
                        <div className='mt-4 mb-3'>
                          <img src={upload_doc_icon} alt="upload document" />
                        </div>
                        <div className='text-kbody6 text-center'>
                          <div>
                            <span className='text-klightpurple'>Click to upload</span> or drag and drop
                          </div>
                          <div className='text-kbody7'>SVG, PNG, JPG or GIF (max. 800x400px)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-6 mb-[17px] border border-[#EAECF0]'></div>
                <div className='flex justify-end px-6'>
                  <Button mywidth={'w-[79px]'} myheight={'h-[40px]'} mybg={'bg-[#fff]'} mycolor={'text-kblack2'}>
                    Cancel
                  </Button>
                  <div className='ml-3'>
                    <Button mywidth={'w-[126px]'} myheight={'h-[40px]'} mybg={'bg-[#7F56D9]'} mycolor={'text-[#fff]'}>
                      Save changes
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='w-full h-[1px] border border-[#EAECF0] my-5'></div>
          {/* profile  */}
          <div className='flex flex-col sm:flex-row mb-12'>
            <div className='xl:w-[386px] text-kbody6 gap-2'>
              <div className='font-medium text-kblack2'>Profile</div>
              <p className='text-kdarkgray'>Update your portfolio and bio.</p>
            </div>
            <div className='w-full pt-6 pb-4 mt-5 sm:mt-0 bg-white shadow-[0px_1px_3px_rgba(16,24,40,0.1),0px_1px_2px_rgba(16,24,40,0.06)] rounded-lg'>
              <form>
                <div className='px-6'>
                  <div className='flex'>
                    <div className={`flex items-center ${available ? 'justify-end':'justify-start'} w-9 h-5 rounded-xl border ${available ? 'bg-primary' : 'bg-white'}`} onClick={() => setAvailable(!available)}>
                      <div className={`w-4 h-4 ${available ? 'bg-white':'bg-kblack2'} m-[2px] rounded-full shadow-[0px_1px_3px_rgba(16,24,40,0.1),0px_1px_2px_rgba(16,24,40,0.06)]`}></div>
                    </div>
                    <div className='w-full ml-2'>
                      <div className='text-kbody6 text-kblack2'>Available for projects</div>
                      <div className='text-kbody6 text-kdarkgray'>I’m open and available for freelance work.</div>
                    </div>
                  </div>
                  <div className='mt-6'>
                    <label className='text-kblack2 text-kbody6 font-medium'>Username</label>
                    <div>
                      <div className='flex justify-center items-center w-full h-[44px] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border rounded-lg border-[#D0D5DD]'>
                        <div className='h-full text-kdarkgray border py-[10px] px-[12px]'>untitledui.com/</div>
                        <input className='w-full h-full rounded-lg border-none outline-none px-[14px]' value='tofunmi'  />
                      </div>
                    </div>
                  </div>
                  <div className='mt-6'>
                    <label className='text-kblack2 text-kbody6 font-medium'>Website</label>
                    <div>
                      <div className='flex justify-center items-center w-full h-[44px] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border rounded-lg border-[#D0D5DD]'>
                        <div className='h-full text-kdarkgray border py-[10px] px-[12px]'>http://</div>
                        <input className='w-full h-full rounded-lg border-none outline-none px-[14px]' value='www.untitledui.com'  />
                      </div>
                    </div>
                  </div>
                  <div className='mt-6'>
                    <label>Bio</label>
                    <textarea 
                      value={'I m a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development.'} 
                      className='w-full min-h-[128px] mt-[6px] pl-[14px] pt-[10px] outline-none border border-[#D0D5DD] rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)]' 
                    />
                    <p className='text-kbody6 text-kdarkgray mb-3'>275 characters left</p>
                  </div>
                  <div className='flex flex-col sm:flex-row sm:items-center'>
                    <div className='w-[240px] h-[44px] border rounded-lg px-[14px]'>
                      <select className='w-full h-full outline-none '>
                        <option value="Normal text">Normal text</option>
                        
                      </select>
                    </div>
                    <div className='flex text-kdarkgray ml-0 mt-[15px] sm:mt-0 sm:ml-[23px]'>
                      <span className='mr-6' ><AiOutlineBold size={20} /></span>
                      <span className='mr-6'><AiOutlineItalic size={20} /></span>
                      <span className='mr-6'><MdOutlineLink size={20} /></span>
                      <span className='mr-6'><TfiMenuAlt size={20} /></span>
                      <span className='mr-6'><MdFormatListNumbered size={20} /></span>
                    </div>
                  
                  </div>
                  <div className='mt-6'>
                    <label className='text-kblack2 text-kbody6 font-medium'>Country</label>
                    <div className='w-full h-[44px] flex justify-between items-center border rounded-lg px-[14px]'>
                      <div className='flex w-full h-full items-center'>
                        <img src={usa_icon} alt="usa icon" /> <span className='ml-[8px]'>United States</span>
                      </div>
                      <RiArrowDownSLine />
                    </div>
                  </div>
                  <div className='mt-6'>
                    <label className='text-kblack2 text-kbody6 font-medium'>Country</label>
                    <div className='w-full h-[44px] flex justify-between items-center border rounded-lg px-[14px]'>
                      <div className='flex w-full h-full items-center'>
                         <AiOutlineClockCircle /><span className='ml-[8px]'>Pacific Standard Time (PST)</span>
                      </div>
                      <RiArrowDownSLine />
                    </div>
                  </div>
                </div>
                <div className='mt-6 mb-[17px] border border-[#EAECF0]'></div>
                <div className='flex justify-end px-6'>
                  <Button mywidth={'w-[79px]'} myheight={'h-[40px]'} mybg={'bg-[#fff]'} mycolor={'text-kblack2'}>
                    Cancel
                  </Button>
                  <div className='ml-3'>
                    <Button mywidth={'w-[126px]'} myheight={'h-[40px]'} mybg={'bg-[#7F56D9]'} mycolor={'text-[#fff]'}>
                      Save changes
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}

export default Details