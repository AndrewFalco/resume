import { MenuItem, TextField } from '@mui/material';
import React from 'react'

interface IProps {
    property: string;
    alias: string;
    register: any;
    errors: any;
    options: any;
    isRequired?: boolean;
}

const Select = (props: IProps) => {
    const {property, alias, register, errors, options, isRequired} = props;
    const [currency, setCurrency] = React.useState();

    const handleChange = (event: any) => {
        setCurrency(event.target.value);
    };

    return (
        <div>
            <TextField
                id={property}
                select
                label={alias}
                value={currency}
                onChange={handleChange}
                margin='dense'
                required={isRequired}
                {...register(property)}
            >
                {options.map((option: any) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            {errors[property] && <p>{errors[property].message}</p>}
        </div>
    )
}

export default Select
