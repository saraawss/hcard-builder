import React, { useCallback, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { Button} from 'react-bootstrap';

const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  transition: 'border .3s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

export default function ImageUploader({image, setImage}) {
  const [srcImg, setSrcImg] = useState(null);

  const [crop, setCrop] = useState({aspect: 16 / 9});

  const onDrop = useCallback(acceptedFiles => {
   
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setSrcImg(reader.result )
      );
      reader.readAsDataURL(acceptedFiles[0]);
    
  }, []);
 
  
  const getCroppedImg = async () => {
        try {
            const canvas = document.createElement("canvas");
            const scaleX = image.naturalWidth / image.width;
            const scaleY = image.naturalHeight / image.height;
            canvas.width = crop.width;
            canvas.height = crop.height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(
                image,
                crop.x * scaleX,
                crop.y * scaleY,
                crop.width * scaleX,
                crop.height * scaleY,
                0,
                0,
                crop.width,
                crop.height
            );

            const base64Image = canvas.toDataURL("image/jpeg", 1);
            setImage(base64Image)
        } catch (e) {
            console.log("crop the image");
        }
    };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png'
  });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);



  return (
    <section>
       {!srcImg && <div {...getRootProps({style})}>
        <input data-testid="drop-input" {...getInputProps()} />
        <div>Drag and drop your or Select Image here.</div>
      </div> }
      <aside>
         {srcImg && 
         				(<>
						<div>
                                <ReactCrop
                                    style={{maxWidth: "50%"}}
                                    src={srcImg}
                                    onImageLoaded={setImage}
                                    crop={crop}
                                    onChange={setCrop}
                                />
                          </div>
                          <div>      
                                <Button variant="secondary" size="sm" className="shadow-sm button-grey" onClick={getCroppedImg}>
                                    crop
                                </Button>
                            </div>
                            </>) }
      </aside>
      
    </section>
  )
}