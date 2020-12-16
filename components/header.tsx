import React, { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch, useSelector } from 'react-redux'
import action from '../redux/actions'

interface Props {
    
}



export default function Header({}: Props): ReactElement {
    const authenReducer = useSelector(({authenReducer}) => authenReducer)
    const dispatch = useDispatch()

    const Logout = () => {
      console.log("LOGOUT")
      dispatch(action.clear())
    }

    return (
      <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Button color="inherit">I</Button>
        <Button color="inherit">LUV</Button>
        <Button color="inherit" onClick={() => {Logout()}}>LOGOUT </Button>
      </Toolbar>
    </AppBar>
    )
}
