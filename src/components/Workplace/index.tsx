import { Checkbox } from '@mui/material';
import React from 'react'
import MyDateField from '../UI/MyDateField'
import MyInput from '../UI/MyInput';
import MyTextField from '../UI/MyTextField';

interface IProps {
    register: any;
    errors: any;
}

const Workplace = (props: IProps) => {

    const { register, errors} = props;
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: any) => {
        setChecked(event.target.checked);
    };
    return (
        <div>
            <MyDateField property="startDate" alias="Дата начала" register={register} errors={errors} isRequired={true} />
            {!checked && <MyDateField property="endDate" alias="Дата окончания" register={register} errors={errors} isRequired={false} />}

            <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <MyInput property="companyName" alias="Наименование кампании" register={register} errors={errors} isRequired={true} />
            <MyInput property="positions" alias="Должность" register={register} errors={errors} isRequired={true} />
            <MyTextField property="cases" alias="Обязанности" register={register} errors={errors} />
        </div>
    )
}

export default Workplace
