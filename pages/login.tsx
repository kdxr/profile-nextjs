import { Container, CssBaseline, Typography, TextField, Button, TableRow, Grid } from '@material-ui/core'
import React, { ReactElement } from 'react'
import Shared_Layout from '../components/layout'

interface Props {
    
}

export default function login({}: Props): ReactElement {

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
                            <Button size="small" /*onClick={() => { alert('Login') }}*/ type="submit" variant="contained" color="primary">
                                Login
                            </Button>
                        </div>
                    </form>
                    </Grid>
               
        </Shared_Layout>
    )
}
