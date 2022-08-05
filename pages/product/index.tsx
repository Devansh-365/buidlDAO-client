import { Button, Form, Input, Upload, UploadFile, UploadProps } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import BDButton from '../../components/atoms/BDButton/BDButton'
import { AppContext } from '../../components/context/AppContext'
import AppPageLayout from '../../components/templates/AppPageLayout/AppPageLayout'
import { ProjectData } from '../../interface'

const ProductPage = () => {
    const ctx = useContext(AppContext);
    const [l, setL] = useState(false);
    const [cover, setCover] = useState<UploadFile | null>(null);
    const [images, setImages] = useState<UploadFile[]>([]);
  
    if(ctx == null) return null;

    const {upload, loading} = ctx;
    const timeout = (ms: number) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

   

    const coverPhotoProps: UploadProps = {
        onRemove: (file: any) => {
          setCover(null);
        },
        beforeUpload: (file : any) => {
            setCover(file);
        },
      };

      const imageProps: UploadProps = {
        onRemove: (file: any) => {
            
            const index = images.indexOf(file);
            const newFileList = images.slice();
            newFileList.splice(index, 1);
            setImages(newFileList);
        },
        beforeUpload: (file : any) => {
            setImages([...images, file]);
            return false;
        },
        fileList: images
      };
    

    const uploadToIPFS = async (file: any) => {
        let formData = new FormData()
        formData.append("file",file);
        const response = await fetch("/api/ipfsimage", {
            body: formData,
            method: 'POST',
        })
        let coverResp = await response.json();
        return coverResp.url;
    }

    const formSubmitHandler = async (v: any) => {
        const data: ProjectData ={images:[], description: v.description, cover:''}
        setL(true)
        data.cover = await uploadToIPFS(cover)
        let imgs: string[] = []
        await timeout(4000);


        for (let file of images) {
            if(file!= null) {
                let img = await uploadToIPFS(file);
                await timeout(4000);
                imgs.push(img)
            }
        }
        
        

        data.images = [...imgs];
        
        const resp = await fetch("/api/ipfscontent", {
            method:"POST",
            body: JSON.stringify({
                ...data,
                name: v.name
            })
        })
        const d = await resp.json()
        await upload(v.name,d.path);
        setL(false)
    }

  return (
    <AppPageLayout>
        <div className='p-6 container mx-auto px-12 h-full flex-col flex items-center justify-center'>
            <div className='border border-solid p-3'>
            <h1 className='text-2xl mb-4'>Create your product</h1>
            <Form onFinish={(val) => {
                formSubmitHandler(val)
            }}>
                    <Form.Item label="Name Of Your Product" name="name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Describe your product" name="description">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Cover" >
                    <Upload multiple={false} maxCount={1}{...coverPhotoProps} >
                        <BDButton>Select File</BDButton>

                    </Upload>

                    </Form.Item>

                    <Form.Item label="Images" >
                    <Upload  maxCount={3} {...imageProps} >
                        <BDButton>Select File</BDButton>

                    </Upload>
                    
                    </Form.Item>
                    <Form.Item>
                        <BDButton htmlType="submit" loading={l}><span>Submit</span></BDButton>
                    </Form.Item>
            </Form>
            </div>
        </div>


    </AppPageLayout>
  )
}

export default ProductPage