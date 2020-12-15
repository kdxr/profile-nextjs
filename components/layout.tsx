import React, { ReactElement, ReactNode } from 'react'
import Header from "./header"
import Footer from "./footer"
import GlobalStyles  from './globalstyle'
import { Box, Container, ThemeProvider } from '@material-ui/core';
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
                    <Container  fixed>
                    <Box component="span" m={1}>
                        {children}
                    </Box>
                    </Container>
                </main>
                <Footer/>
           </ThemeProvider>
        </>
    )
}
