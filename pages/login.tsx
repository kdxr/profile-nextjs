import { Container, CssBaseline, Typography, TextField, Button, TableRow, Grid } from '@material-ui/core'
import React, { ReactElement } from 'react'
import Shared_Layout from '../components/layout'
import { useDispatch, useSelector } from 'react-redux'
import action from '../redux/actions'

interface Props {
    
}

export default function login({}: Props): ReactElement {

    const dispatch = useDispatch()
    const authenReducer = useSelector(({authenReducer}) => authenReducer)
    return (
        <Shared_Layout>
               
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                    <form className={"hello"} /* noValidate*/ autoComplete="off">
                        <div>
                             <TextField size="medium" type="email" id="email" label="E-MAIL" />
                        </div>
                        <div>
                             <TextField id="password" type="password" label="PASSWORD" />
                        </div>
                        <div style={{ marginTop: "5px", marginRight: "5px"}}>
                            <Button
                            size="small" 
                            onClick={()=>{dispatch(action.login({username: "admin", password: "1234"}))}}
                            variant="contained" color="primary">
                                Login
                            </Button>
                        </div>
                    </form>
                    <span>
                    {authenReducer.token ? authenReducer.token : ""}
                    {authenReducer.user ? authenReducer.user.username : ""}
                    </span>


                    </Grid>
               
        </Shared_Layout>
    )
}
