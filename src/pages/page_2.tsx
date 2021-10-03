import { yupResolver } from '@hookform/resolvers/yup';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup'
import Workplace from '../components/Workplace';
import { WpSch } from '../schemas';

import "../styles/style.scss"

const Page2 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver<yup.AnyObjectSchema>(WpSch),
        mode: "onBlur"
    });

    const [value, setValue] = React.useState('yes');

    const handleChange = (event: any) => {
      setValue(event.target.value);
    };

    const history = useHistory();

    const onSubmit = (data: any) => {
        alert(JSON.stringify(data));
        history.push('/page3')
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Step 2</h1>
            <FormControl component="fieldset">
                <FormLabel component="legend">Опыт работы</FormLabel>
                <RadioGroup
                    aria-label="exp"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel value="yes" control={<Radio />} label="Да" {...register("hasExp")} />
                    <FormControlLabel value="no" control={<Radio />} label="Нет" {...register("hasExp")} />
                </RadioGroup>
            </FormControl>
            {
                value === "yes" ? <Workplace register={register} errors={errors} /> : null
            }
            <div className="next_page">
                <input type="submit" value="to next page" />
            </div>
        </form>
    );
}

export default Page2
