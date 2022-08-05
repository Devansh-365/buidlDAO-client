

import { NextApiRequest, NextApiResponse } from 'next'

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '4mb' // Set desired value here
        }
    }
}

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
    if(_req.method == "POST") {
        // if(!_req.body.description || !_req.body.cover  ) {
        //     return res.status(400).json({message:"Missing content"});
        // }



        try {
            const {images, name, description, cover} = JSON.parse(_req.body)
            const response = await fetch("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", {
            method:"POST",
            headers: {
                "accept": 'application/json',
                'X-API-Key': process.env.IPFS as string,
                'Content-Type': 'application/json'
            },
            body:JSON.stringify([{
                "path": "buidldao/"+ name + ".json",
                "content":Buffer.from(JSON.stringify({title: name,images, description, cover})).toString("base64")
            }])
            
            })
            
            const data = await response.json();
            if(data.length) {
                return res.json({
                    path:data[0].path
                })
            }else {
                return res.status(500).json({message:"Failed to upload letter"})
            }
        }catch(err : any) {
            console.error(err);
            return res.status(400).json({message: err.message});
        }
    }else {
        return res.status(404).json({message:"Not found"});
    }
}

export default handler