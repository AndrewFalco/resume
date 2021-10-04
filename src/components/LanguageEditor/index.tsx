import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form';
import { LangSch } from '../../schemas';
import MyInput from '../UI/MyInput';
import { v4 as uuid}  from 'uuid';
import * as yup from 'yup'

import '../../styles/style.scss'
import Select from '../UI/Select';
import { langLevel } from '../../constants';

interface IProps {
    setLang: any;
    setOpen: any;
    open: boolean;
    lang: any;
}
const LanguageEditor = (props: IProps) => {
    const { lang, setLang, setOpen, open } = props;

    const handleClose = () => {
        setOpen(false);
    };

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver<yup.AnyObjectSchema>(LangSch),
        mode: "onBlur"
    });

    const onSubmit = (data: any) =>{
        console.log(data);
        const newWP = {...data};
        newWP.id = uuid();
        lang.push(newWP);
        setLang(lang);
        setOpen(false);
    }
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Иностранный язык</DialogTitle>
            <DialogContent>
                <div className="flex_items">
                    <MyInput property="language" alias="Язык" register={register} errors={errors} isRequired={false} />
                    <Select property="level" alias="Уровень" register={register} errors={errors} options={langLevel} isRequired={false} />
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Отмена</Button>
                <Button onClick={handleSubmit(onSubmit)}>Ок</Button>
            </DialogActions>
        </Dialog>
    )
}

export default LanguageEditor
