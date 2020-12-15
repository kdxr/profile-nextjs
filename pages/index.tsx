import React, { ReactElement, useState } from 'react'
import Shared_Layout from '../components/layout'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { AppBar, Box, Grid, Tab, Tabs, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import FavoriteIcon from '@material-ui/icons/Favorite';

interface Props {
  
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function index({}: Props): ReactElement {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  const goTo = (value) => {
    window.location.href = value
   // onclick={(e) => this.goTo(column)}
  }

  return (
    <Shared_Layout>
       <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        >
          <div style={{marginTop: "1rem"}}>
            <AppBar position="static">
              <Tabs value={value}  onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Who am I ?" />
                <Tab label="Interest Me ?" />
                <Tab label="My Profile ?"  />
              </Tabs>
            </AppBar>
            <TabPanel value={value}  index={0}>
            <p style={{textAlign : "center"}}> 
             <b> My name is Natdanai Thannin </b>
            </p>
            <p style={{textAlign : "center"}}> 
             <b> Since on 1999 [21 year old] </b>
            </p>
            <p style={{textAlign : "center"}}> 
             <b> I am not programmer but i am study learner </b>
            </p>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <p style={{textAlign : "center"}}> 
              <a target="_blank" href="https://www.facebook.com/gunner.cgl/"> <FacebookIcon fontSize='large'/> </a>
              <a target="_blank" href="https://github.com/editorzx"> <GitHubIcon fontSize='large'/> </a>
            </p>
            </TabPanel>
            <TabPanel value={value} index={2}>
             <h2> WATCHING MY PROFILE ON GITHUB  </h2>
             <span style={{textAlign : "center"}} > <FavoriteIcon/> </span>
            </TabPanel>
          </div>
      </Grid>
    </Shared_Layout>
  )
}
