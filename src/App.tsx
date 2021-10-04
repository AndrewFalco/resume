import { Button, List, ListItem, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IResume } from './types';
import Resumes from './store/Resumes'
import { observer } from 'mobx-react-lite';
import Preview from './components/Preview';
import { defaultRes } from './constants';

const App = observer(() => {

  const [open, setOpen] = useState(false);
  const [res, setRes] = useState<IResume>(defaultRes());
  const history = useHistory();

  const openStep1 = () =>{
    history.push('/page1');
  }

  const getPreview = (id: string) =>{
    const selectRes = Resumes.resumes.find(el=> el.id === id);
    selectRes && setRes(selectRes);
    setOpen(true);
  }

  return (
    <div className="App">
      { 
      <div>
        <Button variant="contained" color="success" onClick={openStep1}>Создать резюме</Button>
        <div className="flex_items">
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'grey' }}>
            {Resumes.resumes.map((value: IResume) => (
              <ListItem
                className="my_list"
                key={value.id}
                disableGutters
                secondaryAction={
                  <div className="flex_items">
                    <Button variant="outlined" color="success" onClick={() => { getPreview(value.id) }}>&#x1f441;</Button>
                    <Button variant="contained" color="error" onClick={() => { Resumes.removeResume(value.id) }}>&#128465;</Button>
                  </div>
                }
              >
                <ListItemText primary={`${value.name} `} />
              </ListItem>
            ))}
          </List>
        </div>
        <Preview open={open} setOpen={setOpen} resume={res}/>
      </div>
      }
    </div>

  );
})

export default App;
