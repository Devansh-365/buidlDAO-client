import Link from 'next/link'
import React from 'react'
import styles from './index.module.css';
export interface Props {
    title: string,
    cover:string,
    description: string,
    id: number,
    upvotes: number
}

const ProjectCard: React.FC<Props> = (props) => {
  console.log(props)
    
  return (
    <div className='bg-white grid grid-cols-2 p-2 py-10 my-6'>
        <div >
          <img src={props.cover} className={styles.coverImg}/>
        </div>
        <div >
            <h5 className='text-lg'>{props.title}</h5>
            <p className='mt-4 text-base'>
                {props.description}
            </p>
            <p className='mt-4 text-sm'><Link href={`/product/${props.id}`} >Link</Link></p>
            <p className='mt-4'>{props.upvotes} upvotes </p>
        </div>
    </div>
  )
}

export default ProjectCard