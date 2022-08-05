import { BigNumber } from "ethers"

export interface Project {
    id: BigNumber,
    yesVotes: BigNumber,
    noVotes: BigNumber,
    voteCount: BigNumber,
    data: string,
    creator:string,
    created_at: BigNumber,
    title:string,
    status: number
}

export interface ProjectData {
    images:string[],
    description: string,
    cover: string
}

export interface ProjectView {
    id: number,
    upvotes: number,
    cover: string,
    images:string[],
    description: string,
    title: string,
    created_at:number,
    creator: string,
    status: number
}




