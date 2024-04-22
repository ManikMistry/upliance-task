import React from 'react';
import { Grid } from '@mui/material';
import './Home.css'
import Counter from '../components/Counter/Counter';
import RichTextEditor from '../components/RichEditor/RichEditor';
import UserDataForm from '../components/UserDataForm/UserDataForm';

function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} className="grid-item item1">
        <Counter/>
      </Grid>
      <Grid item xs={6} className="grid-item item2">
        <RichTextEditor/>
      </Grid>
      <Grid item xs={6} className="grid-item item3">
        <UserDataForm/>
      </Grid>
      <Grid item xs={6} className="grid-item item4">
        <div>Content 4</div>
      </Grid>
    </Grid>
  );
}

export default Home;

