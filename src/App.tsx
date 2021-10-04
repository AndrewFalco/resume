import { Button, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { IResume } from './types';
import Resumes from './store/Resumes'
import { observer } from 'mobx-react-lite';

const App = observer(() => {

  const history = useHistory();

  const rmResume = (e: any) => {
    Resumes.removeResume(e.target.id);
  }

  const openStep1 = () =>{
    Resumes.changeDone();
    history.push('/page1');
  }


  return (
    <div className="App">
      {Resumes.isDone && 
      <div>
        <Button variant="contained" color="success" onClick={openStep1}>Создать резюме</Button>
        <div className="flex_items">
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'grey' }}>
            {Resumes.resumes.map((value: IResume) => (
              <ListItem
                key={value.id}
                disableGutters
                secondaryAction={
                  <Button variant="contained" color="error" id={value.id} onClick={rmResume}>X</Button>
                }
              >
                <ListItemText primary={`${value.name} `} />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
      }
    </div>

  );
})

export default App;
