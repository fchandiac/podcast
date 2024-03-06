import { Container } from '@mui/material'
import React from 'react'
import Header from './header'


export default function Layout(props) {
  return (
    <>
    <Container>
        <Header />
    {props.children}
    </Container>
    </>
  )
}
