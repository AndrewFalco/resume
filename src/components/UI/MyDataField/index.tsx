import * as React from 'react';
import { InputAdornment, TextField } from '@mui/material';

interface IProps {
  property: string;
  alias: string;
  register: any;
  errors: any;
  isRequired: boolean;
}

const MyDataField = (props: IProps) => {
  const {property, alias, register, errors, isRequired} = props;
  return (
    <div>
      <TextField
        required={isRequired}
        id={property}
        label={alias}
        margin='dense'
        type='date'
        InputProps={{
          startAdornment: <InputAdornment position="start"></InputAdornment>,
        }}
        {...register(property)}
      />
      {errors[property] && <p>{errors[property].message}</p>}
    </div>
  )
}


export default MyDataField
