import type { NextPage } from 'next'
import { DatePicker } from 'antd';

const Home: NextPage = () => {
  return (
    <div className='flex flex-row justify-center'>
     <DatePicker/>
    </div>
  )
}

export default Home
