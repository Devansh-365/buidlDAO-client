import { Button , ButtonProps} from 'antd'
import React, { PropsWithChildren } from 'react'
import styles from './index.module.css';
export enum ButtonType {
  SecondaryGradient,
  PrimaryGradient,

}

export type IBDButton = {
  buttonType?: ButtonType
} &  ButtonProps
const BDButton:React.FC<PropsWithChildren<IBDButton>> = ({buttonType, children,...rest}: PropsWithChildren<IBDButton>) => {

  

  switch(buttonType) {
    case ButtonType.SecondaryGradient:
      return  ( 
        <div className={styles.secondaryGradient}>
          <div className='bg-white'>
            <Button {...rest} type='link'>{children}</Button>
          </div>
        </div>
      )
      case ButtonType.PrimaryGradient:
        return (
          <div className={styles.primaryGradient}>
            <Button {...rest}>{children}</Button>
          </div>
        )
    default:
      return (<Button {...rest}>{children}</Button>)
  }
}

export default BDButton