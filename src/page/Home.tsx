import React from 'react';
import { Grid } from '@mui/material';
import './Home.css'
import Counter from '../components/Counter/Counter';
import RichTextEditor from '../components/RichEditor/RichEditor';
import UserDataForm from '../components/UserDataForm/UserDataForm';

function Home() {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={6} className="grid-item item1">
        <Counter/>
      </Grid>
      <Grid item xs={6} className="grid-item item2">
        <RichTextEditor/>
      </Grid>
      <Grid item xs={6} className="grid-item item3">
        <UserDataForm/>
      </Grid>
    </Grid>
  );
}

export default Home;

