import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form';
import { SchoolSch } from '../../schemas';
import MyInput from '../UI/MyInput';
import { v4 as uuid}  from 'uuid';
import * as yup from 'yup'

import '../../styles/style.scss'

interface IProps {
    setInst: any;
    setOpen: any;
    open: boolean;
    inst: any;
}
const InstituteEditor = (props: IProps) => {
    const { inst, setInst, setOpen, open } = props;

    const handleClose = () => {
        setOpen(false);
    };

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver<yup.AnyObjectSchema>(SchoolSch),
        mode: "onBlur"
    });

    const onSubmit = (data: any) =>{
        const newWP = {...data};
        newWP.id = uuid();
        inst.push(newWP);
        setInst(inst);
        setOpen(false);
    }
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Иностранный язык</DialogTitle>
            <DialogContent>
                <div className="flex_items">
                    <MyInput property="name" alias="Наименование" register={register} errors={errors} isRequired={false} />
                    <MyInput property="faculty" alias="Факультет" register={register} errors={errors} isRequired={false} />
                    <MyInput property="speciality" alias="Специализация" register={register} errors={errors} isRequired={false} />
                    <MyInput property="endYear" alias="Год окончания" register={register} errors={errors} isRequired={false} type="number"/>
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Отмена</Button>
                <Button onClick={handleSubmit(onSubmit)}>Ок</Button>
            </DialogActions>
        </Dialog>
    )
}

export default InstituteEditor
