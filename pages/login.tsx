import { Container, CssBaseline, Typography, TextField, Button, TableRow } from '@material-ui/core'
import React, { ReactElement } from 'react'
import Shared_Layout from '../components/layout'

interface Props {
    
}

export default function login({}: Props): ReactElement {

    return (
        <Shared_Layout>

                <div  style={{top: '50%', left: '50%', width: '100vw', height: '100vh', position: 'fixed', marginTop: '-50px', marginLeft: '-50px'}}>
                    <form className={"hello"} noValidate autoComplete="off">
                        <div>
                             <TextField size="medium" id="email" label="E-MAIL" />
                        </div>
                        <div>
                             <TextField id="password" type="password" label="PASSWORD" />
                        </div>
                        <div style={{ marginTop: "5px"}}>
                            <Button size="small" onClick={() => { alert('Login') }} variant="contained" color="primary">
                                Login
                            </Button>
                        </div>
                    </form>
                </div>

        </Shared_Layout>
    )
}
