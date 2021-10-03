import { yupResolver } from '@hookform/resolvers/yup';
import { Button, FormControl, FormControlLabel, FormLabel, IconButton, List, ListItem, ListItemText, Radio, RadioGroup } from '@mui/material';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup'
import WorkplaceEditor from '../components/WorkplaceEditor';
import ClearIcon from '@mui/icons-material/Clear';
import { Page2Sch } from '../schemas';

import "../styles/style.scss"

interface IWP {
    id: string;
    startDate: Date;
    endDate: Date | string | null;
    toPresent: boolean;
    companyName: string;
    position: string;
    cases?: string
}

const Page2 = () => {
    const { register, handleSubmit } = useForm({
        resolver: yupResolver<yup.AnyObjectSchema>(Page2Sch),
        mode: "onBlur"
    });

    const [value, setValue] = useState('no');
    const [open, setOpen] = useState(false);
    const [wp, setWp] = useState<IWP[]>([]);

    const handleChange = (event: any) => {
      setValue(event.target.value);
      setWp([]);
    };

    const history = useHistory();

    const onSubmit = (data: any) => {
        alert(JSON.stringify(data));
        if(value==='yes' && wp.length===0) return;
        history.push('/page3')
    };

    const rmItem = (e: any) =>{
        const filteredWp = wp.filter(el => el.id !== e.target.id);
        setWp(filteredWp);
    }

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
            {value==="yes" &&  <Button variant="contained" color="success" onClick={()=>setOpen(true)}>Добавить место</Button>}
            <WorkplaceEditor wp={wp} setWp={setWp} setOpen={setOpen} open={open}/>
            {
                value === "yes" ? 
                    <div className="flex_items">
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            {wp.map((value) => (
                                <ListItem
                                    key={value.id}
                                    disableGutters
                                    secondaryAction={
                                        <IconButton>
                                          <ClearIcon id={value.id} onClick={rmItem}/>
                                        </IconButton>
                                      }
                                >
                                    <ListItemText primary={`${value.companyName} ${value.position} ${new Date(value.startDate).toISOString().split('T')[0]}`} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                : null
            }
            <div className="next_page">
                <input type="submit" value="to next page" />
            </div>
        </form>
    );
}

export default Page2
