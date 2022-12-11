import React from 'react'

function Button({mywidth,myheight,mybg,mycolor,children}) {
  return (
    <div className={`flex ${mywidth} ${myheight} justify-center items-center font-medium ${mybg} ${mycolor} border rounded-lg text-kbody6 shadow-[0px_1px_2px_rgba(16,24,40,0.05)]`}>
        {children}
    </div>
  )
}

export default Button