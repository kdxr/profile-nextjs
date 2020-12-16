import React from "react"
import App from "next/app"
import { AppProps } from "next/app"
import Head from "next/head"
import { wrapper } from '../redux'

interface Props{
}

function CMApp( {Component, pageProps }: AppProps){
    console.log("Hello MainApp")
    return(
        <>
        <Component {...pageProps} />
        </>
    )
}

export default wrapper.withRedux(CMApp)