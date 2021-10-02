import { TextField } from '@material-ui/core';
import React from 'react'
import { useForm } from 'react-hook-form';

interface IProps {
    property: string;
    alias: string;
    register: any;
    errors: any;
    isRequired: boolean; 
    type?: string
}

const MyInput = (props: IProps) => {
    const {property, alias, register, errors, isRequired, type } = props;
    return (
        <div>
            <TextField
                required = {isRequired}
                id={property}
                label={alias}
                margin='dense'
                type={type || 'text'}
                {...register(property)} 
            />
            {errors[property] && <p>{errors[property].message}</p>}
        </div>
    )
}

export default MyInput
