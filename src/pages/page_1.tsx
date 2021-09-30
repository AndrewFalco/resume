import React, { useState } from 'react'
import { Button, Card, Form, Image } from 'react-bootstrap'

import "../styles/style.scss"

const Page1 = () => {

    const [photo, setPhoto] = useState<string>('')

    const onSelectFile = (e: any) =>{
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => { 
            if (typeof(reader.result) == 'string'){           
                setPhoto(reader.result)
            }
        }

        reader.readAsDataURL(file)
        
    }

    return (
        <div>
            <h1>Step 1</h1>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Default file input example</Form.Label>
                <Image className="card_img" src= {photo || "/home/andrew/Загрузки/c9ea654eb3a7398b1f702c758c1c4206.jpg"} rounded />
                <Form.Control type="file" onChange={onSelectFile}/>
            </Form.Group>
            
        </div>
    )
}

export default Page1