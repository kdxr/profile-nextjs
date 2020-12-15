import React, { ReactElement, ReactNode } from 'react'
import Header from "./header"
import Footer from "./footer"
import GlobalStyles  from './globalstyle'
import { Box, Container, Grid, ThemeProvider } from '@material-ui/core';
import theme from '../theme';

interface Props {
    children: ReactNode
}

export default function Shared_Layout({ children }: Props): ReactElement {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Header/>
                <main>
                    <div style={{width: '100vw', height: '80vh'}}>
                       
                            {children}
                       
                    </div>
                </main>
                <Footer/>
           </ThemeProvider>
        </>
    )
}
