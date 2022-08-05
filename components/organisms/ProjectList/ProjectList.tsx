import React, { useContext, useEffect, useState } from 'react'
import { ProjectData, ProjectView } from '../../../interface';
import {AppContext} from '../../context/AppContext';
import ProjectCard from '../../molecules/ProjectCard/ProjectCard'
import { getDataFromIPFS } from './utils';


const ProjectList = () => {
    const ctx = useContext(AppContext);
    if(ctx ==null) {
        return null;
    }
    const [projects, setProjects] = useState<ProjectView[]>([]);


    const {getProjects, getProjectUpvotes, verify} = ctx;




    const getProjectsAndSetup = async () => {
      const pjts = await getProjects()
      let p =[];
      for(let pjt of pjts) {
        const data = await getDataFromIPFS<ProjectData>(pjt.data);
        const projectUpvotes = await getProjectUpvotes(pjt.id.toNumber())
         p.push({
           id: pjt.id.toNumber(),
           created_at: pjt.created_at.toNumber(),
           creator: pjt.creator,
           title: pjt.title,
           description: data.description,
           images: data.images,
           upvotes: projectUpvotes.length,
           cover: data.cover,
           status: pjt.status
       })
      
      }
     
       setProjects(p)
    }
    useEffect(() => {
        getProjectsAndSetup()
    },[])
  
  return (
    <div>
       {projects.map((pjkt, index) => {
        return (
           <div key={index}>
             <ProjectCard {...pjkt}  />
             </div>
        )
       })}
    </div>
  )
}

export default ProjectList