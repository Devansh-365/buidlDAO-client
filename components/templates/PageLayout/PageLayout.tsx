import React, { PropsWithChildren } from 'react'
import Navbar from '../../organisms/Navbar/Navbar'

export const PageLayout = (props: PropsWithChildren) => {
  return (
   <div>
    <>
        <Navbar/>
        {props.children}
    </>
   </div>
  )
}
