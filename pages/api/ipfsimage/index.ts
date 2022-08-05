

import { NextApiRequest, NextApiResponse } from 'next'
import formidable from "formidable";

import fs from 'fs';
import axios from 'axios'
export const config = {
    api: {
      bodyParser: false
    }
  };


const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
    if(_req.method == "POST") {
       
        const form = new formidable.IncomingForm();
        form.parse(_req, async function (err, fields, files) {
            const file = files.file as formidable.File
            const data = fs.readFileSync(file.filepath);
            try {
                
                const resFile = await axios({
                    method: "post",
                    url: "https://deep-index.moralis.io/api/v2/ipfs/uploadFolder",
                    data: JSON.stringify([{
                                "path": "buidldao"+ file.filepath.split("/").length ? file.filepath.split("/").pop() : file.filepath ,
                                "content":data.toString("base64")
                     }]),
                    headers: {
                        "accept": 'application/json',
                        'X-API-Key': process.env.IPFS as string,
                        "Content-Type": "application/json"
                    },
                });
                if(resFile.status >=400) {
                    throw new Error("Failed to upload")
                }
                return res.status(resFile.status).send({url: resFile.data[0].path});
            }catch(err: any) {
                console.error(err);
                return res.status(500).json({message: err.message})
            }

        });

     
    }else {
        return res.status(404).json({message:"Not found"});
    }
}

export default handler