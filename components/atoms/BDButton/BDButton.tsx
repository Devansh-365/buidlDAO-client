import { Button } from 'antd'
import React, { PropsWithChildren } from 'react'
import styles from './index.module.css';
export enum ButtonType {
  SecondaryGradient,
  PrimaryGradient,

}

export interface IBDButton {
  buttonType: ButtonType
}
const BDButton:React.FC<IBDButton> = (props: PropsWithChildren<IBDButton>) => {



  switch(props.buttonType) {
    case ButtonType.SecondaryGradient:
      return  ( 
        <div className={styles.secondaryGradient}>
          <div className='bg-white'>
            <Button type='link'>{props.children}</Button>
          </div>
        </div>
      )
      case ButtonType.PrimaryGradient:
        return (
          <div className={styles.primaryGradient}>
            <Button>{props.children}</Button>
          </div>
        )
    default:
      return (<Button>{props.children}</Button>)
  }
}

export default BDButton