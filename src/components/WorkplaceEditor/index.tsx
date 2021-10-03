import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form';
import { WpSch } from '../../schemas';
import MyDateField from '../UI/MyDateField'
import MyInput from '../UI/MyInput';
import MyTextField from '../UI/MyTextField';
import { v4 as uuid}  from 'uuid';
import * as yup from 'yup'

import '../../styles/style.scss'

interface IProps {
    setWp: any;
    setOpen: any;
    open: boolean;
    wp: any;
}
const WorkplaceEditor = (props: IProps) => {
    const { wp, setWp, setOpen, open } = props;
    const [checked, setChecked] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const { register, handleSubmit,unregister, formState: { errors } } = useForm({
        resolver: yupResolver<yup.AnyObjectSchema>(WpSch),
        mode: "onBlur"
    });

    const handleChange = (event: any) => {
        setChecked(event.target.checked);
        checked && unregister("endDate");
    };

    const onSubmit = (data: any) =>{
        console.log(data);
        const newWP = {...data};
        newWP.toPresent = checked;
        newWP.id = uuid();
        wp.push(newWP);
        setWp(wp);
        setOpen(false);
    }
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Место работы</DialogTitle>
            <DialogContent>
                <div className="workplace">
                    <MyDateField property="startDate" alias="Дата начала" register={register} errors={errors} isRequired={true} />
                    {!checked && <MyDateField property="endDate" alias="Дата окончания" register={register} errors={errors} isRequired={!checked} />}
                    <FormControlLabel control={<Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />} label="По настоящее время" />
                    <MyInput property="companyName" alias="Наименование компании" register={register} errors={errors} isRequired={true} />
                    <MyInput property="position" alias="Должность" register={register} errors={errors} isRequired={true} />
                    <MyTextField property="cases" alias="Обязанности" register={register} errors={errors} />
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit(onSubmit)}>Subscribe</Button>
            </DialogActions>
        </Dialog>
    )
}

export default WorkplaceEditor
