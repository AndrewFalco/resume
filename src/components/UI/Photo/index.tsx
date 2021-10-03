import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

import "../../../styles/style.scss"
import defaultPhoto from "../../../styles/photo.png"


const Photo = () => {
    const [photo, setPhoto] = useState<string>(defaultPhoto)

    const onSelectFile = (e: any) =>{
        e.preventDefault()

        let reader = new FileReader()
        let file = e.target.files[0]

        reader.onloadend = () => { 
            if (typeof(reader.result) == 'string'){           
                setPhoto(reader.result)
            }
        }
        reader.readAsDataURL(file)        
    }

    const Input = styled('input')({
        display: 'none',
      })

    return (
        <div className="group_photo_img">
            <img className="card_img" src={photo} alt="Photo" />
            <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={onSelectFile} />
                <Button variant="contained" component="span" >
                    Выбрать фото
                </Button>
            </label>
        </div>
    )
}

export default Photo
