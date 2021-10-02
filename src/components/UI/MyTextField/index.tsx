import { TextField } from '@material-ui/core';
import React from 'react'
import { useForm } from 'react-hook-form';

interface IProps {
    property: string;
    alias: string;
    register: any;
    errors: any;
}

const MyTextField = (props: IProps) => {
    const {property, alias, register, errors} = props;
    return (
        <>
            <TextField
                id={property}
                label={alias}
                multiline
                rows={4}
                margin='dense'
                {...register(property)}
            />
            {errors[property] && <p>{errors[property].message}</p>}
        </>
    )
}

export default MyTextField
