import React, {useState} from 'react';
import { InputAdornment, TextField } from '@mui/material';

interface IProps {
  property: string;
  alias: string;
  register: any;
  errors: any;
  isRequired: boolean;
}

const MyDateField = (props: IProps) => {
  const {property, alias, register, errors, isRequired} = props;
  const [date, setDate] = useState(new Date())
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


export default MyDateField
