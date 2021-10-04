import { Clear } from '@mui/icons-material';
import { Button, IconButton, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { IResume } from './types';
import  Resume from './store/Resume'
import { observer } from 'mobx-react-lite';

const  App = observer(() => {

  const history = useHistory();

  const rmResume = (e: any) => {
    Resume.removeResume(e.target.id);
  }

  return (
    <div className="App">
      <Button variant="contained" color="success" onClick={() => history.push('/page1')}>Создать резюме</Button>
      <div className="flex_items">
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {Resume.resumes.map((value: IResume) => (
            <ListItem
              key={value.id}
              disableGutters
              secondaryAction={
                <IconButton>
                  <Clear id={value.id} onClick={rmResume} />
                </IconButton>
              }
            >
              <ListItemText primary={`${value.name} `} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
})

export default App;
