import React, { PropsWithChildren } from 'react'
import SideNav from '../../organisms/SideNav/SideNav'
import styles from './index.module.css'
const AppPageLayout: React.FC<PropsWithChildren> = (props) => {
  return (
    <div className={styles.dashboard}>
    <div className='col-span-1'>
        <SideNav/>
        </div>
        <div className={styles.mainContent} >
            {props.children}
        </div>
        
    </div>
  )
}

export default AppPageLayout