import { yupResolver } from '@hookform/resolvers/yup';
import { Clear } from '@mui/icons-material';
import { Button, IconButton, List, ListItem, ListItemText } from '@mui/material';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup'
import InstituteEditor from '../components/instituteEdit';
import LanguageEditor from '../components/LanguageEditor';
import MyInput from '../components/UI/MyInput';
import Select from '../components/UI/Select';
import { education } from '../constants';
import { EduSch } from '../schemas';
import Resume from '../store/Resume';
import Resumes from '../store/Resumes';

import "../styles/style.scss"

interface ILanguages {
    id: string;
    language: string;
    level: string;
}

interface IInstitutes {
    id: string;
    name: string;
    faculty: string;
    speciality: string;
    endYear: number;
}

const Page3 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver<yup.AnyObjectSchema>(EduSch),
        mode: "onBlur"
    });

    const [languages, setLanguages] = useState<ILanguages[]>([])
    const [institutes, setInstitutes] = useState<IInstitutes[]>([])
    const [open, setOpen] = useState(false);
    const [openInst, setOpenInst] = useState(false);
    const history = useHistory();

    const rmItem = (e: any) =>{
        const filtered = languages.filter(el => el.id !== e.target.id);
        setLanguages(filtered);
    }
    const rmInst = (e: any) =>{
        const filtered = institutes.filter(el => el.id !== e.target.id);
        setInstitutes(filtered);
    }

    const onSubmit = (data: any) => {
        const newProps = {...data};
        newProps.otherLanguage = languages;
        newProps.placeOfStudy = institutes;
        Resume.updateProperty({education: [newProps]});
        Resumes.addResume(Resume.resume);
        history.push('/')
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Step 3</h1>
            <Select property="level" alias="Уровень образования" register={register} errors={errors} options={education} isRequired={true} />
            <MyInput property="language" alias="Родной язык" register={register} errors={errors} isRequired={true} />
            <Button variant="contained" color="success" onClick={() => setOpen(true)}>Добавить иностранный язык</Button>
            <LanguageEditor lang={languages} setLang={setLanguages} setOpen={setOpen} open={open} />
            <div className="flex_items">
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {languages.map((value) => (
                        <ListItem
                            key={value.id}
                            disableGutters
                            secondaryAction={
                                <IconButton>
                                    <Clear id={value.id} onClick={rmItem} />
                                </IconButton>
                            }
                        >
                            <ListItemText primary={ `${value.language} ${value.level}` } />
                        </ListItem>
                    ))}
                </List>
            </div>
            <Button variant="contained" color="success" onClick={() => setOpenInst(true)}>Добавить место обучения</Button>
            <InstituteEditor inst={institutes} setInst={setInstitutes} setOpen={setOpenInst} open={openInst} />
            <div className="flex_items">
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {institutes.map((value) => (
                        <ListItem
                            key={value.id}
                            disableGutters
                            secondaryAction={
                                <IconButton>
                                    <Clear id={value.id} onClick={rmInst} />
                                </IconButton>
                            }
                        >
                            <ListItemText primary={ `${value.name} ${value.endYear}` } />
                        </ListItem>
                    ))}
                </List>
            </div>
            <div className="next_page">
                <input type="submit" value="to next page" />
            </div>
        </form>
    );
}

export default Page3
